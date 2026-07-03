(function () {
  const STORAGE_KEY = "english-a2-offline-coach-progress";
  const lessonList = document.getElementById("lesson-list");
  const lessonCardTemplate = document.getElementById("lesson-card-template");
  const scenarioTitle = document.getElementById("scenario-title");
  const scenarioContext = document.getElementById("scenario-context");
  const stepBadge = document.getElementById("step-badge");
  const promptLine = document.getElementById("prompt-line");
  const userTranscript = document.getElementById("user-transcript");
  const feedbackOutput = document.getElementById("feedback-output");
  const listenButton = document.getElementById("listen-button");
  const recordButton = document.getElementById("record-button");
  const nextButton = document.getElementById("next-button");
  const offlineBadge = document.getElementById("offline-badge");
  const installButton = document.getElementById("install-button");
  const downloadPackButton = document.getElementById("download-pack-button");
  const statRounds = document.getElementById("stat-rounds");
  const statScore = document.getElementById("stat-score");
  const statStreak = document.getElementById("stat-streak");

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let deferredPrompt = null;
  let activeLessonIndex = 0;
  let activeLineIndex = 0;
  let activeButtons = [];
  let recognition = null;

  const state = loadState();

  renderLessons();
  selectLesson(0);
  updateConnectivity();
  renderStats();
  registerEvents();
  registerServiceWorker();

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        rounds: saved.rounds || 0,
        totalScore: saved.totalScore || 0,
        streak: saved.streak || 0
      };
    } catch {
      return { rounds: 0, totalScore: 0, streak: 0 };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function renderLessons() {
    lessonList.innerHTML = "";
    activeButtons = window.LESSONS.map((lesson, index) => {
      const node = lessonCardTemplate.content.firstElementChild.cloneNode(true);
      node.querySelector(".lesson-level").textContent = lesson.level;
      node.querySelector(".lesson-title").textContent = lesson.title;
      node.querySelector(".lesson-summary").textContent = lesson.summary;
      node.addEventListener("click", () => selectLesson(index));
      lessonList.appendChild(node);
      return node;
    });
  }

  function selectLesson(index) {
    activeLessonIndex = index;
    activeLineIndex = 0;
    activeButtons.forEach((button, buttonIndex) => {
      button.classList.toggle("active", buttonIndex === index);
    });
    renderLesson();
  }

  function renderLesson() {
    const lesson = window.LESSONS[activeLessonIndex];
    const line = lesson.lines[activeLineIndex];
    scenarioTitle.textContent = lesson.title;
    scenarioContext.textContent = lesson.context;
    promptLine.textContent = line;
    stepBadge.textContent = `${activeLineIndex + 1} / ${lesson.lines.length}`;
    userTranscript.textContent = "Waiting for your voice...";
    feedbackOutput.innerHTML = "Listen to the model line and then speak it.";
  }

  function registerEvents() {
    listenButton.addEventListener("click", speakCurrentLine);
    recordButton.addEventListener("click", startRecognition);
    nextButton.addEventListener("click", nextLine);
    downloadPackButton.addEventListener("click", showOfflineTips);

    window.addEventListener("online", updateConnectivity);
    window.addEventListener("offline", updateConnectivity);

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredPrompt = event;
      installButton.hidden = false;
    });

    installButton.addEventListener("click", async () => {
      if (!deferredPrompt) {
        return;
      }
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
      installButton.hidden = true;
    });
  }

  function updateConnectivity() {
    offlineBadge.textContent = navigator.onLine ? "Online" : "Offline ready";
    offlineBadge.classList.toggle("muted", navigator.onLine);
  }

  function speakCurrentLine() {
    const utterance = new SpeechSynthesisUtterance(window.LESSONS[activeLessonIndex].lines[activeLineIndex]);
    utterance.lang = "en-US";
    const englishVoice = speechSynthesis.getVoices().find((voice) => voice.lang && voice.lang.startsWith("en"));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  function startRecognition() {
    if (!SpeechRecognition) {
      feedbackOutput.innerHTML = "Speech recognition is not available in this browser. You can still use the lesson text and device voice.";
      return;
    }

    recognition?.abort();
    recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      userTranscript.textContent = "Listening...";
      feedbackOutput.innerHTML = "Speak now. Try to match the model line with a clear rhythm.";
    };
    recognition.onerror = (event) => {
      const isOfflineIssue = event.error === "network" || event.error === "service-not-allowed";
      feedbackOutput.innerHTML = isOfflineIssue
        ? "Your device browser needs its offline speech engine enabled. Install the English offline speech pack in Android settings and try again."
        : `Speech recognition error: ${event.error}.`;
      userTranscript.textContent = "No transcript captured.";
    };
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      userTranscript.textContent = transcript || "No transcript captured.";
      const evaluation = evaluateAttempt(transcript, window.LESSONS[activeLessonIndex].lines[activeLineIndex]);
      feedbackOutput.innerHTML = evaluation.html;
      persistScore(evaluation.score);
    };
    recognition.start();
  }

  function evaluateAttempt(transcript, target) {
    const normalizedTranscript = normalizeText(transcript);
    const normalizedTarget = normalizeText(target);
    const targetWords = normalizedTarget.split(" ").filter(Boolean);
    const spokenWords = normalizedTranscript.split(" ").filter(Boolean);
    const matchedWords = spokenWords.filter((word) => targetWords.includes(word)).length;
    const coverage = targetWords.length ? matchedWords / targetWords.length : 0;
    const editScore = similarity(normalizedTranscript, normalizedTarget);
    const score = Math.round(((coverage * 0.45) + (editScore * 0.55)) * 100);
    const missingWords = targetWords.filter((word) => !spokenWords.includes(word));
    const grammarHints = buildGrammarHints(normalizedTranscript, normalizedTarget);
    const scoreLabel = score >= 85 ? "Strong" : score >= 65 ? "Good" : "Keep practicing";

    const html = [
      `<p><strong>${scoreLabel} attempt:</strong> ${score}% match.</p>`,
      `<p><strong>Pronunciation proxy:</strong> We compare what the device heard against the target sentence. Better rhythm and clearer sounds usually improve this score.</p>`,
      missingWords.length ? `<p><strong>Missing words:</strong> ${missingWords.slice(0, 5).join(", ")}.</p>` : "<p><strong>Missing words:</strong> none.</p>",
      grammarHints.length ? `<p><strong>Grammar hint:</strong> ${grammarHints.join(" ")}</p>` : "<p><strong>Grammar hint:</strong> Sentence structure looks close to the model.</p>"
    ].join("");

    return { html, score };
  }

  function buildGrammarHints(transcript, target) {
    const hints = [];
    if (target.includes("do not") && !transcript.includes("do not")) {
      hints.push("Use the negative form 'do not' here.");
    }
    if (target.includes("is") && !transcript.includes("is")) {
      hints.push("Check the verb 'is'.");
    }
    if (target.includes("have") && !transcript.includes("have")) {
      hints.push("Include 'have' to complete the idea.");
    }
    if (transcript && !/[.!?]$/.test(transcript)) {
      hints.push("Pause at the end to sound more natural.");
    }
    return hints;
  }

  function persistScore(score) {
    state.rounds += 1;
    state.totalScore += score;
    state.streak = score >= 70 ? state.streak + 1 : 0;
    saveState();
    renderStats();
  }

  function renderStats() {
    statRounds.textContent = String(state.rounds);
    statScore.textContent = state.rounds ? `${Math.round(state.totalScore / state.rounds)}%` : "0%";
    statStreak.textContent = String(state.streak);
  }

  function nextLine() {
    const lesson = window.LESSONS[activeLessonIndex];
    activeLineIndex = (activeLineIndex + 1) % lesson.lines.length;
    renderLesson();
  }

  function showOfflineTips() {
    feedbackOutput.innerHTML = [
      "<p><strong>Offline voice checklist:</strong></p>",
      "<p>1. Open Android Settings.</p>",
      "<p>2. Search for 'Speech Services' or 'Text-to-speech'.</p>",
      "<p>3. Download the English offline language pack.</p>",
      "<p>4. Reopen this app and test the microphone again.</p>"
    ].join("");
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js");
    }
  }

  function normalizeText(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s']/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function similarity(first, second) {
    if (!first && !second) {
      return 1;
    }
    const distance = levenshtein(first, second);
    const longestLength = Math.max(first.length, second.length) || 1;
    return 1 - (distance / longestLength);
  }

  function levenshtein(first, second) {
    const matrix = Array.from({ length: second.length + 1 }, () => []);
    for (let row = 0; row <= second.length; row += 1) {
      matrix[row][0] = row;
    }
    for (let column = 0; column <= first.length; column += 1) {
      matrix[0][column] = column;
    }
    for (let row = 1; row <= second.length; row += 1) {
      for (let column = 1; column <= first.length; column += 1) {
        const cost = second[row - 1] === first[column - 1] ? 0 : 1;
        matrix[row][column] = Math.min(
          matrix[row - 1][column] + 1,
          matrix[row][column - 1] + 1,
          matrix[row - 1][column - 1] + cost
        );
      }
    }
    return matrix[second.length][first.length];
  }
}());
