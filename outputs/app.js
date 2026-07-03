const CACHE_VERSION = "englishdeuna-v7";

const practiceSeed = {
  names: ["Ana", "Luis", "Sofia", "Mateo", "Camila", "Daniel", "Laura", "Miguel", "Sara", "Juan", "Valeria", "Tomas", "Paula", "Andres", "Elena", "Samuel", "Juliana", "David", "Maria", "Nicolas"],
  cities: ["Valledupar", "Bogota", "Medellin", "Cali", "Barranquilla", "Cartagena", "Bucaramanga", "Santa Marta", "Manizales", "Pereira", "Sincelejo", "Monteria"],
  countries: ["Colombia", "Peru", "Chile", "Ecuador", "Mexico", "Panama"],
  foods: ["chicken and rice", "fish and salad", "soup and bread", "eggs and toast", "beans and rice", "pasta with tomato sauce", "a cheese sandwich", "fruit and yogurt"],
  drinks: ["water", "orange juice", "milk", "lemon juice", "hot chocolate", "tea", "apple juice", "coffee"],
  subjects: ["English", "math", "science", "art", "music", "history"],
  hobbies: ["music", "soccer", "drawing", "reading", "dancing", "video games", "cooking", "cycling"],
  transport: ["bus", "bike", "taxi", "motorbike", "walk", "train"],
  homePlaces: ["kitchen", "living room", "bedroom", "yard", "bathroom", "dining room"],
  schoolPlaces: ["library", "classroom", "computer room", "playground", "cafeteria", "music room"],
  familyRoles: ["mother", "father", "grandmother", "grandfather", "sister", "brother", "aunt", "uncle"],
  chores: ["wash the dishes", "make the bed", "clean the table", "feed the dog", "sweep the floor", "water the plants"],
  healthProblems: ["a headache", "a stomachache", "a sore throat", "a fever", "a cough", "a toothache"],
  weather: ["sunny", "rainy", "cloudy", "windy", "hot", "cool"],
  clothes: ["blue T-shirt", "black shoes", "green jacket", "red cap", "white socks", "yellow dress"],
  events: ["school fair", "family lunch", "soccer match", "birthday party", "music class", "science club"],
  times: ["six o'clock", "six thirty", "seven o'clock", "seven thirty", "eight o'clock", "eight thirty", "nine o'clock", "nine thirty"],
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  adjectives: ["friendly", "quiet", "busy", "small", "bright", "clean", "fun", "comfortable"],
  reasons: ["because it is interesting", "because the teacher is kind", "because the class is fun", "because it helps every day", "because the place is close to home", "because the food is good"]
};

function pick(list, index, offset = 0) {
  return list[(index + offset) % list.length];
}

function chooseOptions(correct, wrongA, wrongB, answerIndex) {
  const options = [wrongA, wrongB];
  options.splice(answerIndex, 0, correct);
  return { options, answer: answerIndex };
}

function buildSpeakingScenario(index) {
  const name = pick(practiceSeed.names, index);
  const city = pick(practiceSeed.cities, index, 2);
  const country = pick(practiceSeed.countries, index, 1);
  const hobby = pick(practiceSeed.hobbies, index, 3);
  const food = pick(practiceSeed.foods, index, 4);
  const drink = pick(practiceSeed.drinks, index, 2);
  const subject = pick(practiceSeed.subjects, index, 1);
  const transport = pick(practiceSeed.transport, index, 2);
  const chore = pick(practiceSeed.chores, index, 1);
  const event = pick(practiceSeed.events, index, 2);
  const weather = pick(practiceSeed.weather, index, 1);
  const day = pick(practiceSeed.days, index, 3);
  const time = pick(practiceSeed.times, index, 2);
  const familyRole = pick(practiceSeed.familyRoles, index, 1);
  const clothes = pick(practiceSeed.clothes, index, 2);
  const healthProblem = pick(practiceSeed.healthProblems, index, 1);
  const schoolPlace = pick(practiceSeed.schoolPlaces, index, 2);
  const theme = index % 10;

  if (theme === 0) {
    return {
      id: `speaking-introduction-${index + 1}`,
      title: `Speaking ${index + 1}: Introductions`,
      opening: `Hi. Please introduce yourself like ${name}.`,
      targets: [
        `My name is ${name} and I am from ${country}.`,
        `I live in ${city} and I study ${subject}.`,
        `I like ${hobby} after school.`,
        `Nice to meet you. I am happy to practice English.`
      ],
      tips: "Use: My name is..., I am from..., I live in..., I like..."
    };
  }
  if (theme === 1) {
    return {
      id: `speaking-routine-${index + 1}`,
      title: `Speaking ${index + 1}: Daily routine`,
      opening: `Tell me about your routine on ${day}.`,
      targets: [
        `I get up at ${time}.`,
        `I go to school by ${transport}.`,
        `After school, I ${chore}.`,
        `At night, I study ${subject} and then I sleep.`
      ],
      tips: "Use present simple verbs in short, clear sentences."
    };
  }
  if (theme === 2) {
    return {
      id: `speaking-restaurant-${index + 1}`,
      title: `Speaking ${index + 1}: At a restaurant`,
      opening: "You are ordering food. Speak politely.",
      targets: [
        `I would like ${food}, please.`,
        `Can I have ${drink}, please?`,
        `How much is the meal?`,
        `Thank you. The food looks very good.`
      ],
      tips: "Use polite requests: I would like..., Can I have...?"
    };
  }
  if (theme === 3) {
    return {
      id: `speaking-transport-${index + 1}`,
      title: `Speaking ${index + 1}: Transportation`,
      opening: "Explain how you travel in the city.",
      targets: [
        `I usually go by ${transport}.`,
        `The ${transport} is good for my school day.`,
        `I leave home at ${time}.`,
        `I arrive near the ${schoolPlace} before class.`
      ],
      tips: "Use transport words and time expressions."
    };
  }
  if (theme === 4) {
    return {
      id: `speaking-doctor-${index + 1}`,
      title: `Speaking ${index + 1}: At the doctor`,
      opening: "Describe the problem to the doctor.",
      targets: [
        `I have ${healthProblem}.`,
        `I do not feel very well today.`,
        `I need to drink water and rest.`,
        `Can I have some medicine, please?`
      ],
      tips: "Use: I have..., I feel..., I need..."
    };
  }
  if (theme === 5) {
    return {
      id: `speaking-shopping-${index + 1}`,
      title: `Speaking ${index + 1}: Shopping`,
      opening: "Ask for clothes in a store.",
      targets: [
        `I am looking for a ${clothes}.`,
        `Do you have this in another size?`,
        `Can I try it on, please?`,
        `I like it because it is ${pick(practiceSeed.adjectives, index, 1)}.`
      ],
      tips: "Use store phrases and clothing words."
    };
  }
  if (theme === 6) {
    return {
      id: `speaking-school-${index + 1}`,
      title: `Speaking ${index + 1}: School life`,
      opening: "Tell me about your school.",
      targets: [
        `My favorite subject is ${subject}.`,
        `I study in the ${schoolPlace} every week.`,
        `My teacher is ${pick(practiceSeed.adjectives, index, 2)}.`,
        `I enjoy school because I like ${hobby}.`
      ],
      tips: "Talk about subjects, places, and opinions at school."
    };
  }
  if (theme === 7) {
    return {
      id: `speaking-home-${index + 1}`,
      title: `Speaking ${index + 1}: Home and family`,
      opening: "Describe a family activity at home.",
      targets: [
        `My ${familyRole} is in the ${pick(practiceSeed.homePlaces, index, 1)}.`,
        `We eat together in the evening.`,
        `I help my family and ${chore}.`,
        `Our home is ${pick(practiceSeed.adjectives, index, 3)} and happy.`
      ],
      tips: "Use family words, house places, and simple actions."
    };
  }
  if (theme === 8) {
    return {
      id: `speaking-weekend-${index + 1}`,
      title: `Speaking ${index + 1}: Weekend plans`,
      opening: `What are you going to do on ${day}?`,
      targets: [
        `I am going to go to the ${event}.`,
        `I am going to see my ${familyRole}.`,
        `We are going to eat ${food}.`,
        `It will be a ${pick(practiceSeed.adjectives, index, 4)} day.`
      ],
      tips: "Use going to for future plans."
    };
  }
  return {
    id: `speaking-weather-${index + 1}`,
    title: `Speaking ${index + 1}: Weather and plans`,
    opening: `Tell me what you do when the weather is ${weather}.`,
    targets: [
      `Today the weather is ${weather}.`,
      `I wear my ${clothes} when it is ${weather}.`,
      `After class, I like ${hobby}.`,
      `Then I go home and study ${subject}.`
    ],
    tips: "Connect weather, clothes, and activities in short sentences."
  };
}

function buildListeningActivity(index) {
  const answerIndex = index % 3;
  const city = pick(practiceSeed.cities, index, 1);
  const transport = pick(practiceSeed.transport, index, 2);
  const schoolPlace = pick(practiceSeed.schoolPlaces, index, 2);
  const subject = pick(practiceSeed.subjects, index, 1);
  const food = pick(practiceSeed.foods, index, 3);
  const drink = pick(practiceSeed.drinks, index, 1);
  const time = pick(practiceSeed.times, index, 2);
  const day = pick(practiceSeed.days, index, 2);
  const familyRole = pick(practiceSeed.familyRoles, index, 1);
  const event = pick(practiceSeed.events, index, 1);
  const healthProblem = pick(practiceSeed.healthProblems, index, 1);
  const weather = pick(practiceSeed.weather, index, 1);
  const homePlace = pick(practiceSeed.homePlaces, index, 2);
  const theme = index % 10;
  let correct;
  let question;
  let wrongA;
  let wrongB;
  let audio;
  let explanation;
  let title;
  let summary;

  if (theme === 0) {
    correct = `At the ${schoolPlace}`;
    wrongA = "At the hospital";
    wrongB = "At the park";
    question = "Where should the student get off?";
    audio = `Take the ${transport} in ${city} and get off at the stop near the ${schoolPlace}.`;
    explanation = `The audio says the stop is near the ${schoolPlace}.`;
    title = `Listening ${index + 1}: Directions`;
    summary = "Escucha instrucciones cortas sobre lugares.";
  } else if (theme === 1) {
    correct = time;
    wrongA = pick(practiceSeed.times, index, 4);
    wrongB = pick(practiceSeed.times, index, 5);
    question = "What time is the class or activity?";
    audio = `On ${day}, the ${subject} class starts at ${time}. Please arrive a little early.`;
    explanation = `The recording says the class starts at ${time}.`;
    title = `Listening ${index + 1}: Schedule`;
    summary = "Practica horarios, dias y materias.";
  } else if (theme === 2) {
    correct = drink;
    wrongA = pick(practiceSeed.drinks, index, 3);
    wrongB = pick(practiceSeed.drinks, index, 4);
    question = "What drink does the speaker want?";
    audio = `I would like ${food} and a glass of ${drink}, please.`;
    explanation = `The speaker asks for ${drink}.`;
    title = `Listening ${index + 1}: Food order`;
    summary = "Escucha pedidos sencillos de comida.";
  } else if (theme === 3) {
    correct = `Visit the ${familyRole}`;
    wrongA = "Go to school";
    wrongB = "Play in the street";
    question = "What is the weekend plan?";
    audio = `On ${day}, I am going to visit my ${familyRole} and then go to the ${event}.`;
    explanation = `The first plan is to visit the ${familyRole}.`;
    title = `Listening ${index + 1}: Weekend plan`;
    summary = "Identifica planes futuros en frases cortas.";
  } else if (theme === 4) {
    correct = healthProblem;
    wrongA = pick(practiceSeed.healthProblems, index, 3);
    wrongB = pick(practiceSeed.healthProblems, index, 4);
    question = "What problem does the student have?";
    audio = `I do not feel well. I think I have ${healthProblem} today.`;
    explanation = `The speaker clearly says ${healthProblem}.`;
    title = `Listening ${index + 1}: Health`;
    summary = "Escucha problemas de salud comunes.";
  } else if (theme === 5) {
    correct = weather;
    wrongA = pick(practiceSeed.weather, index, 2);
    wrongB = pick(practiceSeed.weather, index, 3);
    question = "How is the weather?";
    audio = `Today it is ${weather}, so bring a jacket before you leave the ${homePlace}.`;
    explanation = `The recording says the weather is ${weather}.`;
    title = `Listening ${index + 1}: Weather`;
    summary = "Reconoce clima y ropa en mensajes cortos.";
  } else if (theme === 6) {
    correct = subject;
    wrongA = pick(practiceSeed.subjects, index, 3);
    wrongB = pick(practiceSeed.subjects, index, 4);
    question = "Which subject is mentioned?";
    audio = `My favorite class is ${subject} because it is fun and useful.`;
    explanation = `The speaker says the subject is ${subject}.`;
    title = `Listening ${index + 1}: Favorite class`;
    summary = "Escucha opiniones simples sobre la escuela.";
  } else if (theme === 7) {
    correct = transport;
    wrongA = pick(practiceSeed.transport, index, 3);
    wrongB = pick(practiceSeed.transport, index, 4);
    question = "How does the student travel?";
    audio = `Every morning I go by ${transport} because it is easy and cheap.`;
    explanation = `The transport named in the sentence is ${transport}.`;
    title = `Listening ${index + 1}: Transportation`;
    summary = "Identifica medios de transporte y razones.";
  } else if (theme === 8) {
    correct = homePlace;
    wrongA = pick(practiceSeed.homePlaces, index, 3);
    wrongB = pick(practiceSeed.homePlaces, index, 4);
    question = "Where is the object or person?";
    audio = `Please put the notebook in the ${homePlace} before dinner.`;
    explanation = `The notebook should go in the ${homePlace}.`;
    title = `Listening ${index + 1}: Home instructions`;
    summary = "Trabaja ubicacion de objetos en casa.";
  } else {
    correct = event;
    wrongA = pick(practiceSeed.events, index, 3);
    wrongB = pick(practiceSeed.events, index, 4);
    question = "Which event is mentioned?";
    audio = `After school, we are going to the ${event} and then home.`;
    explanation = `The event in the message is the ${event}.`;
    title = `Listening ${index + 1}: After-school event`;
    summary = "Escucha planes despues de clase.";
  }

  const choice = chooseOptions(correct, wrongA, wrongB, answerIndex);
  return {
    id: `listening-${index + 1}`,
    title,
    summary,
    audio,
    question,
    options: choice.options,
    answer: choice.answer,
    explanation
  };
}

function buildReadingActivity(index) {
  const answerIndex = index % 3;
  const name = pick(practiceSeed.names, index, 1);
  const city = pick(practiceSeed.cities, index, 2);
  const subject = pick(practiceSeed.subjects, index, 1);
  const hobby = pick(practiceSeed.hobbies, index, 3);
  const homePlace = pick(practiceSeed.homePlaces, index, 2);
  const schoolPlace = pick(practiceSeed.schoolPlaces, index, 1);
  const familyRole = pick(practiceSeed.familyRoles, index, 1);
  const chore = pick(practiceSeed.chores, index, 1);
  const food = pick(practiceSeed.foods, index, 2);
  const transport = pick(practiceSeed.transport, index, 2);
  const event = pick(practiceSeed.events, index, 2);
  const adjective = pick(practiceSeed.adjectives, index, 1);
  const reason = pick(practiceSeed.reasons, index, 2);
  const weather = pick(practiceSeed.weather, index, 1);
  const day = pick(practiceSeed.days, index, 2);
  const theme = index % 10;
  let passage;
  let question;
  let correct;
  let wrongA;
  let wrongB;
  let explanation;
  let title;
  let summary;

  if (theme === 0) {
    passage = `${name} lives in ${city}. ${name} goes to school by ${transport} every day. The favorite subject is ${subject}, and after class ${name} likes ${hobby}. On ${day}, ${name} studies in the ${schoolPlace}.`;
    question = `What is ${name}'s favorite subject?`;
    correct = subject;
    wrongA = pick(practiceSeed.subjects, index, 3);
    wrongB = pick(practiceSeed.subjects, index, 4);
    explanation = `The passage says the favorite subject is ${subject}.`;
    title = `Reading ${index + 1}: Student profile`;
    summary = "Lee perfiles cortos de estudiantes.";
  } else if (theme === 1) {
    passage = `The house is ${adjective} and comfortable. There is a table in the ${homePlace}, and the family eats there every evening. After dinner, the student helps the ${familyRole} and ${chore}. The family likes the home because ${reason}.`;
    question = "Where does the family eat?";
    correct = `In the ${homePlace}`;
    wrongA = `In the ${pick(practiceSeed.homePlaces, index, 3)}`;
    wrongB = `In the ${pick(practiceSeed.homePlaces, index, 4)}`;
    explanation = `The text says the family eats in the ${homePlace}.`;
    title = `Reading ${index + 1}: Home life`;
    summary = "Practica lectura sobre casa y familia.";
  } else if (theme === 2) {
    passage = `On ${day}, the class has a ${event}. Students meet in the ${schoolPlace} before they leave. They carry water, notebooks, and a small snack. The teacher says the activity is ${adjective} and educational.`;
    question = "What should students carry?";
    correct = "Water, notebooks, and a snack";
    wrongA = "Only a phone";
    wrongB = "A laptop and headphones";
    explanation = "The passage lists water, notebooks, and a small snack.";
    title = `Reading ${index + 1}: School trip`;
    summary = "Lee planes de salida o actividad escolar.";
  } else if (theme === 3) {
    passage = `${name} wants to be healthier. In the morning, ${name} drinks water and eats ${food}. After school, ${name} walks near the ${schoolPlace}. At night, ${name} sleeps early because ${reason}.`;
    question = `Why does ${name} sleep early?`;
    correct = reason;
    wrongA = "Because the room is dark";
    wrongB = "Because the homework is hard";
    explanation = `The text says ${name} sleeps early ${reason}.`;
    title = `Reading ${index + 1}: Healthy habits`;
    summary = "Trabaja comprension sobre rutinas saludables.";
  } else if (theme === 4) {
    passage = `The weather in ${city} is ${weather} today. ${name} wears a jacket and goes by ${transport}. After class, ${name} visits the ${familyRole} and they share ${food}. It is a simple but happy afternoon.`;
    question = `How is the weather in ${city}?`;
    correct = weather;
    wrongA = pick(practiceSeed.weather, index, 3);
    wrongB = pick(practiceSeed.weather, index, 4);
    explanation = `The first sentence says the weather is ${weather}.`;
    title = `Reading ${index + 1}: Weather plan`;
    summary = "Lee textos cortos sobre clima y actividades.";
  } else if (theme === 5) {
    passage = `${name} is in a store because the family needs a ${pick(practiceSeed.clothes, index, 1)}. The student asks for another size and then tries it on. The color is nice and the price is fair, so the family buys it before going home.`;
    question = "Why is the student in the store?";
    correct = "To buy clothes";
    wrongA = "To eat lunch";
    wrongB = "To catch a bus";
    explanation = "The text explains that the family goes to the store to buy clothes.";
    title = `Reading ${index + 1}: Shopping`;
    summary = "Comprension de compras y ropa.";
  } else if (theme === 6) {
    passage = `${name} enjoys ${subject} because the teacher is ${adjective}. The class meets in the ${schoolPlace} twice a week. Students read, talk, and practice together. Everyone says the class is useful and fun.`;
    question = `Where does the class meet?`;
    correct = `In the ${schoolPlace}`;
    wrongA = `In the ${pick(practiceSeed.schoolPlaces, index, 3)}`;
    wrongB = `In the ${pick(practiceSeed.schoolPlaces, index, 4)}`;
    explanation = `The class meets in the ${schoolPlace}.`;
    title = `Reading ${index + 1}: Favorite class`;
    summary = "Trabaja detalles sobre clases y lugares.";
  } else if (theme === 7) {
    passage = `Every ${day}, ${name} helps the ${familyRole} at home. First, the student ${chore}. Then the family eats ${food} together. After that, ${name} studies ${subject} for one hour.`;
    question = `What does ${name} do first?`;
    correct = chore;
    wrongA = `Studies ${subject}`;
    wrongB = `Eats ${food}`;
    explanation = `The passage says the first action is to ${chore}.`;
    title = `Reading ${index + 1}: Family routine`;
    summary = "Lee secuencias sencillas de acciones.";
  } else if (theme === 8) {
    passage = `The students are going to the ${event} on ${day}. They leave school at ${pick(practiceSeed.times, index, 1)} and return at ${pick(practiceSeed.times, index, 4)}. They feel excited because the event is ${adjective}.`;
    question = "How do the students feel?";
    correct = "Excited";
    wrongA = "Angry";
    wrongB = "Sleepy";
    explanation = "The passage says the students feel excited.";
    title = `Reading ${index + 1}: Event day`;
    summary = "Comprension de emociones y horarios.";
  } else {
    passage = `${name} takes the ${transport} to ${city}'s ${schoolPlace}. The trip is short, and the student likes it because ${reason}. In the afternoon, ${name} meets friends and enjoys ${hobby}.`;
    question = `Why does ${name} like the trip?`;
    correct = reason;
    wrongA = "Because it is expensive";
    wrongB = "Because it is difficult";
    explanation = `The text says the trip is nice ${reason}.`;
    title = `Reading ${index + 1}: Moving around town`;
    summary = "Lee textos cortos sobre transporte y ciudad.";
  }

  const choice = chooseOptions(correct, wrongA, wrongB, answerIndex);
  return {
    id: `reading-${index + 1}`,
    title,
    summary,
    passage,
    question,
    options: choice.options,
    answer: choice.answer,
    explanation
  };
}

function buildWritingActivity(index) {
  const name = pick(practiceSeed.names, index, 1);
  const city = pick(practiceSeed.cities, index, 2);
  const subject = pick(practiceSeed.subjects, index, 1);
  const hobby = pick(practiceSeed.hobbies, index, 2);
  const food = pick(practiceSeed.foods, index, 3);
  const day = pick(practiceSeed.days, index, 2);
  const familyRole = pick(practiceSeed.familyRoles, index, 1);
  const schoolPlace = pick(practiceSeed.schoolPlaces, index, 1);
  const homePlace = pick(practiceSeed.homePlaces, index, 2);
  const transport = pick(practiceSeed.transport, index, 2);
  const event = pick(practiceSeed.events, index, 2);
  const weather = pick(practiceSeed.weather, index, 1);
  const adjective = pick(practiceSeed.adjectives, index, 1);
  const theme = index % 10;

  if (theme === 0) {
    return {
      id: `writing-introduction-${index + 1}`,
      title: `Writing ${index + 1}: Introduce yourself`,
      summary: "Escribe una presentacion corta.",
      prompt: `Write 3 sentences like ${name}. Include name, city, age, and one thing you like.`,
      goal: "Use: My name is..., I am ... years old, I live in..., I like...",
      sample: `My name is ${name}. I live in ${city}. I am thirteen years old and I like ${hobby}.`
    };
  }
  if (theme === 1) {
    return {
      id: `writing-routine-${index + 1}`,
      title: `Writing ${index + 1}: Daily routine`,
      summary: "Escribe sobre tu rutina del dia.",
      prompt: `Write 3 or 4 sentences about your routine on ${day}.`,
      goal: "Use present simple verbs and one time expression.",
      sample: `On ${day}, I get up early. I go by ${transport}. After school, I study ${subject} and I like ${hobby}.`
    };
  }
  if (theme === 2) {
    return {
      id: `writing-weekend-${index + 1}`,
      title: `Writing ${index + 1}: Weekend plans`,
      summary: "Practica el futuro cercano.",
      prompt: `Write 3 sentences about what you are going to do at the ${event}.`,
      goal: "Use going to at least two times.",
      sample: `This weekend, I am going to go to the ${event}. I am going to see my ${familyRole}. We are going to eat ${food}.`
    };
  }
  if (theme === 3) {
    return {
      id: `writing-place-${index + 1}`,
      title: `Writing ${index + 1}: Describe a place`,
      summary: "Describe un lugar de casa o escuela.",
      prompt: `Write 3 sentences describing the ${schoolPlace} or the ${homePlace}.`,
      goal: "Use there is or there are and one adjective.",
      sample: `The ${schoolPlace} is ${adjective}. There are many useful things there. I like this place because I study ${subject} there.`
    };
  }
  if (theme === 4) {
    return {
      id: `writing-family-${index + 1}`,
      title: `Writing ${index + 1}: Family help`,
      summary: "Escribe sobre ayuda en casa.",
      prompt: `Write 3 sentences about how you help your ${familyRole} at home.`,
      goal: "Use I help..., I ..., and one place in the house.",
      sample: `I help my ${familyRole} at home. I work in the ${homePlace}. Then I clean and prepare for school.`
    };
  }
  if (theme === 5) {
    return {
      id: `writing-school-${index + 1}`,
      title: `Writing ${index + 1}: School life`,
      summary: "Habla por escrito de la escuela.",
      prompt: `Write 3 sentences about your favorite subject and the ${schoolPlace}.`,
      goal: "Use because to give one reason.",
      sample: `My favorite subject is ${subject}. I like the ${schoolPlace} because it is ${adjective}. I feel happy when I study there.`
    };
  }
  if (theme === 6) {
    return {
      id: `writing-food-${index + 1}`,
      title: `Writing ${index + 1}: Meals and preferences`,
      summary: "Escribe sobre comida y bebida.",
      prompt: "Write 3 sentences about a meal you like and why you like it.",
      goal: "Use I like..., I eat..., and one reason.",
      sample: `I like ${food}. I eat it with my family. It is good for me and it makes me feel happy.`
    };
  }
  if (theme === 7) {
    return {
      id: `writing-weather-${index + 1}`,
      title: `Writing ${index + 1}: Weather and clothes`,
      summary: "Relaciona clima, ropa y acciones.",
      prompt: `Write 3 sentences about a ${weather} day and what you do.`,
      goal: "Use It is..., I wear..., and I...",
      sample: `It is ${weather} today. I wear comfortable clothes and go by ${transport}. After school, I like ${hobby}.`
    };
  }
  if (theme === 8) {
    return {
      id: `writing-city-${index + 1}`,
      title: `Writing ${index + 1}: My city`,
      summary: "Describe ciudad, transporte y lugares.",
      prompt: `Write 3 or 4 sentences about life in ${city}.`,
      goal: "Use there is or there are plus one opinion.",
      sample: `I live in ${city}. There are interesting places like the ${schoolPlace}. I go by ${transport} and I think my city is ${adjective}.`
    };
  }
  return {
    id: `writing-opinion-${index + 1}`,
    title: `Writing ${index + 1}: Short opinion`,
    summary: "Da una opinion sencilla con soporte.",
    prompt: `Write 3 sentences about why you like ${hobby} or ${subject}.`,
    goal: "Use I like..., because..., and one extra detail.",
    sample: `I like ${hobby}. It is ${adjective} and relaxing. It also helps me enjoy my day after ${subject}.`
  };
}

const speakingScenarios = Array.from({ length: 400 }, (_, index) => buildSpeakingScenario(index));
const listeningActivities = Array.from({ length: 400 }, (_, index) => buildListeningActivity(index));
const readingActivities = Array.from({ length: 400 }, (_, index) => buildReadingActivity(index));
const writingActivities = Array.from({ length: 400 }, (_, index) => buildWritingActivity(index));

const avatarBases = [
  { id: "starter-sky", label: "Sky Starter", tone: "tone-warm", hair: "hair-short", shirt: "shirt-teal", theme: "theme-sky" },
  { id: "forest-reader", label: "Forest Reader", tone: "tone-light", hair: "hair-wave", shirt: "shirt-gold", theme: "theme-forest" },
  { id: "sunset-player", label: "Sunset Player", tone: "tone-deep", hair: "hair-curly", shirt: "shirt-coral", theme: "theme-sunset" },
  { id: "night-dreamer", label: "Night Dreamer", tone: "tone-warm", hair: "hair-bun", shirt: "shirt-violet", theme: "theme-night" }
];

const avatarThemes = [
  { id: "theme-sky", label: "Sky" },
  { id: "theme-sunset", label: "Sunset" },
  { id: "theme-forest", label: "Forest" },
  { id: "theme-night", label: "Night" }
];

const shopItems = [
  { id: "none-front", name: "No front accessory", slot: "front", price: 0, level: 1, rarity: "free", free: true, className: "", description: "Simple and clean look." },
  { id: "none-back", name: "No back accessory", slot: "back", price: 0, level: 1, rarity: "free", free: true, className: "", description: "No back item equipped." },
  { id: "glasses", name: "Student Glasses", slot: "front", price: 0, level: 1, rarity: "free", free: true, className: "accessory-glasses", description: "Classic glasses for study mode." },
  { id: "headband", name: "Rainbow Headband", slot: "front", price: 12, level: 1, rarity: "rare", free: false, className: "accessory-headband", description: "Bright and cheerful style." },
  { id: "backpack", name: "Explorer Backpack", slot: "back", price: 18, level: 2, rarity: "rare", free: false, className: "accessory-backpack", description: "Looks perfect for school adventures." },
  { id: "cap", name: "Campus Cap", slot: "front", price: 24, level: 3, rarity: "rare", free: false, className: "accessory-cap", description: "A sporty cap for active learners." },
  { id: "hood", name: "Study Hoodie", slot: "front", price: 32, level: 4, rarity: "epic", free: false, className: "accessory-hood", description: "A cozy premium hood." },
  { id: "star-glasses", name: "Star Glasses", slot: "front", price: 48, level: 5, rarity: "epic", free: false, className: "accessory-star-glasses", description: "Shiny glasses for top students." },
  { id: "crown", name: "Champion Crown", slot: "front", price: 75, level: 6, rarity: "legendary", free: false, className: "accessory-crown", description: "For students with elite progress." },
  { id: "wings", name: "Golden Wings", slot: "back", price: 95, level: 7, rarity: "legendary", free: false, className: "accessory-wings", description: "High-level wings with heroic style." }
];

const state = {
  module: "listening",
  activityIndex: 0,
  speakingIndex: 0,
  speakingTargetIndex: 0,
  learnerGender: localStorage.getItem("a2-learner-gender") || "",
  turnCount: Number(localStorage.getItem("a2-turns") || 0),
  bestScore: Number(localStorage.getItem("a2-best") || 0),
  totalPoints: Number(localStorage.getItem("a2-points") || 0),
  completedCount: Number(localStorage.getItem("a2-completed") || 0),
  xp: Number(localStorage.getItem("a2-xp") || 0),
  level: Number(localStorage.getItem("a2-level") || 1),
  streak: Number(localStorage.getItem("a2-streak") || 0),
  coins: Number(localStorage.getItem("a2-coins") || 0),
  achievement: localStorage.getItem("a2-achievement") || "Sin insignias",
  badgeState: loadBadgeState(),
  avatarConfig: loadAvatarConfig(),
  ownedItems: loadOwnedItems(),
  modulePoints: 0,
  recognition: null,
  listening: false,
  installPrompt: null,
  swRegistration: null
};

const els = {
  welcomeOverlay: document.querySelector("#welcomeOverlay"),
  chooseBoyButton: document.querySelector("#chooseBoyButton"),
  chooseGirlButton: document.querySelector("#chooseGirlButton"),
  networkStatus: document.querySelector("#networkStatus"),
  voiceStatus: document.querySelector("#voiceStatus"),
  scoreStatus: document.querySelector("#scoreStatus"),
  moduleStatus: document.querySelector("#moduleStatus"),
  levelValue: document.querySelector("#levelValue"),
  rankLabel: document.querySelector("#rankLabel"),
  xpMeter: document.querySelector("#xpMeter"),
  xpText: document.querySelector("#xpText"),
  streakValue: document.querySelector("#streakValue"),
  coinsValue: document.querySelector("#coinsValue"),
  achievementValue: document.querySelector("#achievementValue"),
  achievementHint: document.querySelector("#achievementHint"),
  refreshAppButton: document.querySelector("#refreshAppButton"),
  topAvatarPreview: document.querySelector("#topAvatarPreview"),
  topAvatarBody: document.querySelector("#topAvatarBody"),
  topAvatarAccessoryFront: document.querySelector("#topAvatarAccessoryFront"),
  topAvatarAccessoryBack: document.querySelector("#topAvatarAccessoryBack"),
  assistantWidget: document.querySelector("#assistantWidget"),
  assistantHideButton: document.querySelector("#assistantHideButton"),
  assistantAvatarPreview: document.querySelector("#assistantAvatarPreview"),
  assistantAvatarBody: document.querySelector("#assistantAvatarBody"),
  assistantAvatarAccessoryFront: document.querySelector("#assistantAvatarAccessoryFront"),
  assistantAvatarAccessoryBack: document.querySelector("#assistantAvatarAccessoryBack"),
  assistantTitle: document.querySelector("#assistantTitle"),
  assistantMessage: document.querySelector("#assistantMessage"),
  assistantShowShopButton: document.querySelector("#assistantShowShopButton"),
  assistantGiveTipButton: document.querySelector("#assistantGiveTipButton"),
  assistantShowButton: document.querySelector("#assistantShowButton"),
  avatarBaseSelect: document.querySelector("#avatarBaseSelect"),
  avatarThemeSelect: document.querySelector("#avatarThemeSelect"),
  avatarPreview: document.querySelector("#avatarPreview"),
  avatarBody: document.querySelector("#avatarBody"),
  avatarAccessoryFront: document.querySelector("#avatarAccessoryFront"),
  avatarAccessoryBack: document.querySelector("#avatarAccessoryBack"),
  randomizeAvatarButton: document.querySelector("#randomizeAvatarButton"),
  shopGrid: document.querySelector("#shopGrid"),
  shopCoinsPill: document.querySelector("#shopCoinsPill"),
  installButton: document.querySelector("#installButton"),
  moduleTabs: Array.from(document.querySelectorAll(".module-tab")),
  activitySelect: document.querySelector("#activitySelect"),
  activitySummary: document.querySelector("#activitySummary"),
  targetPhrase: document.querySelector("#targetPhrase"),
  hearTargetButton: document.querySelector("#hearTargetButton"),
  turnCount: document.querySelector("#turnCount"),
  bestScore: document.querySelector("#bestScore"),
  completedCount: document.querySelector("#completedCount"),
  modulePoints: document.querySelector("#modulePoints"),
  badgeGrid: document.querySelector("#badgeGrid"),
  pronunciationMeter: document.querySelector("#pronunciationMeter"),
  pronunciationFeedback: document.querySelector("#pronunciationFeedback"),
  grammarFeedback: document.querySelector("#grammarFeedback"),
  coachTip: document.querySelector("#coachTip"),
  goalTip: document.querySelector("#goalTip"),
  listeningPanel: document.querySelector("#listeningPanel"),
  listeningTitle: document.querySelector("#listeningTitle"),
  listeningPrompt: document.querySelector("#listeningPrompt"),
  listeningPlayButton: document.querySelector("#listeningPlayButton"),
  listeningQuestion: document.querySelector("#listeningQuestion"),
  listeningOptions: document.querySelector("#listeningOptions"),
  listeningFeedback: document.querySelector("#listeningFeedback"),
  listeningNextButton: document.querySelector("#listeningNextButton"),
  speakingPanel: document.querySelector("#speakingPanel"),
  speakingTitle: document.querySelector("#speakingTitle"),
  speakingGuideIndicator: document.querySelector("#speakingGuideIndicator"),
  speakingGuideStatus: document.querySelector("#speakingGuideStatus"),
  coachSpeechDots: document.querySelector("#coachSpeechDots"),
  micSignalIndicator: document.querySelector("#micSignalIndicator"),
  micSignalStatus: document.querySelector("#micSignalStatus"),
  micSignalBars: document.querySelector("#micSignalBars"),
  chatLog: document.querySelector("#chatLog"),
  typedAnswer: document.querySelector("#typedAnswer"),
  micButton: document.querySelector("#micButton"),
  sendButton: document.querySelector("#sendButton"),
  nextButton: document.querySelector("#nextButton"),
  readingPanel: document.querySelector("#readingPanel"),
  readingTitle: document.querySelector("#readingTitle"),
  readingPassage: document.querySelector("#readingPassage"),
  readingQuestion: document.querySelector("#readingQuestion"),
  readingOptions: document.querySelector("#readingOptions"),
  readingFeedback: document.querySelector("#readingFeedback"),
  readingNextButton: document.querySelector("#readingNextButton"),
  writingPanel: document.querySelector("#writingPanel"),
  writingTitle: document.querySelector("#writingTitle"),
  writingPrompt: document.querySelector("#writingPrompt"),
  writingGoal: document.querySelector("#writingGoal"),
  writingAnswer: document.querySelector("#writingAnswer"),
  writingCheckButton: document.querySelector("#writingCheckButton"),
  writingSampleButton: document.querySelector("#writingSampleButton"),
  writingFeedback: document.querySelector("#writingFeedback"),
  writingNextButton: document.querySelector("#writingNextButton")
};

function bindIfPresent(element, eventName, handler) {
  if (element) {
    element.addEventListener(eventName, handler);
  }
}

function init() {
  setupAvatarMenus();
  setupSpeechRecognition();
  bindEvents();
  updateOnlineStatus();
  switchModule("listening");
  updateStats();
  renderAvatar();
  renderShop();
  showWelcomeOverlayIfNeeded();
  registerServiceWorker();
}

function bindEvents() {
  els.moduleTabs.forEach((button) => {
    button.addEventListener("click", () => switchModule(button.dataset.module));
  });
  els.chooseBoyButton.addEventListener("click", () => setLearnerGender("boy"));
  els.chooseGirlButton.addEventListener("click", () => setLearnerGender("girl"));
  els.activitySelect.addEventListener("change", () => {
    state.activityIndex = Number(els.activitySelect.value);
    renderCurrentModule();
  });
  els.avatarBaseSelect.addEventListener("change", () => {
    const base = avatarBases.find((item) => item.id === els.avatarBaseSelect.value);
    if (!base) return;
    state.avatarConfig.baseId = base.id;
    state.avatarConfig.tone = base.tone;
    state.avatarConfig.hair = base.hair;
    state.avatarConfig.shirt = base.shirt;
    if (!state.avatarConfig.theme) {
      state.avatarConfig.theme = base.theme;
    }
    persistStats();
    renderAvatar();
  });
  els.avatarThemeSelect.addEventListener("change", () => {
    state.avatarConfig.theme = els.avatarThemeSelect.value;
    persistStats();
    renderAvatar();
  });
  els.randomizeAvatarButton.addEventListener("click", randomizeAvatar);
  bindIfPresent(els.refreshAppButton, "click", refreshAppFromInternet);
  bindIfPresent(els.assistantHideButton, "click", hideAssistantWidget);
  bindIfPresent(els.assistantShowShopButton, "click", jumpToShop);
  bindIfPresent(els.assistantGiveTipButton, "click", cycleAssistantTip);
  bindIfPresent(els.assistantShowButton, "click", showAssistantWidget);
  bindIfPresent(els.hearTargetButton, "click", playCurrentTargetAudio);
  bindIfPresent(els.listeningPlayButton, "click", () => speak(getCurrentListening().audio));
  bindIfPresent(els.listeningNextButton, "click", () => advanceActivity("listening"));
  els.micButton.addEventListener("click", toggleListening);
  els.sendButton.addEventListener("click", () => submitSpeakingAnswer(els.typedAnswer.value));
  els.nextButton.addEventListener("click", nextSpeakingTarget);
  els.writingCheckButton.addEventListener("click", checkWritingAnswer);
  els.writingSampleButton.addEventListener("click", showWritingSample);
  bindIfPresent(els.readingNextButton, "click", () => advanceActivity("reading"));
  bindIfPresent(els.writingNextButton, "click", () => advanceActivity("writing"));
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  window.addEventListener("pageshow", updateInstallButtonState);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      updateInstallButtonState();
    }
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.installPrompt = event;
    updateInstallButtonState();
  });
  window.addEventListener("appinstalled", () => {
    state.installPrompt = null;
    updateInstallButtonState();
  });
  els.installButton.addEventListener("click", async () => {
    if (isStandaloneMode()) {
      els.coachTip.textContent = "La app ya esta instalada en este dispositivo.";
      els.goalTip.textContent = "Puedes seguir practicando incluso sin conexion.";
      return;
    }
    if (state.installPrompt) {
      state.installPrompt.prompt();
      await state.installPrompt.userChoice;
      state.installPrompt = null;
      updateInstallButtonState();
      return;
    }
    els.coachTip.textContent = "Si no sale la instalacion automatica, abre el menu del navegador y toca Instalar app o Agregar a pantalla de inicio.";
    els.goalTip.textContent = "Consejo: si actualizaste la app, prueba instalar de nuevo desde el navegador.";
  });
}

function switchModule(moduleName) {
  state.module = moduleName;
  state.activityIndex = 0;
  state.modulePoints = 0;
  els.moduleTabs.forEach((button) => {
    button.classList.toggle("active", button.dataset.module === moduleName);
  });
  document.querySelectorAll(".module-panel").forEach((panel) => {
    panel.classList.remove("active");
  });
  document.querySelector(`#${moduleName}Panel`).classList.add("active");
  els.moduleStatus.textContent = capitalize(moduleName);
  populateActivitySelect();
  renderCurrentModule();
  updateStats();
  renderBadges();
  renderShop();
}

function populateActivitySelect() {
  const activities = getCurrentActivities();
  els.activitySelect.replaceChildren();
  activities.forEach((activity, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = activity.title;
    els.activitySelect.append(option);
  });
  els.activitySelect.value = String(state.activityIndex);
}

function renderCurrentModule() {
  document.body.dataset.view = state.module === "shop" ? "shop" : "study";
  if (state.module === "listening") renderListening();
  if (state.module === "speaking") renderSpeaking();
  if (state.module === "reading") renderReading();
  if (state.module === "writing") renderWriting();
  if (state.module === "shop") renderShopModule();
  updateStats();
  renderShop();
  updateAssistantMessage();
}

function getCurrentActivities() {
  if (state.module === "listening") return listeningActivities;
  if (state.module === "speaking") return speakingScenarios;
  if (state.module === "reading") return readingActivities;
  if (state.module === "shop") return [];
  return writingActivities;
}

function getCurrentListening() {
  return listeningActivities[state.activityIndex];
}

function getCurrentSpeaking() {
  return speakingScenarios[state.activityIndex];
}

function getCurrentReading() {
  return readingActivities[state.activityIndex];
}

function getCurrentWriting() {
  return writingActivities[state.activityIndex];
}

function advanceActivity(moduleName) {
  const collections = {
    listening: listeningActivities,
    reading: readingActivities,
    writing: writingActivities
  };
  const activities = collections[moduleName];
  if (!activities || !activities.length) return;
  state.activityIndex = (state.activityIndex + 1) % activities.length;
  els.activitySelect.value = String(state.activityIndex);
  if (state.module === moduleName) {
    renderCurrentModule();
  }
}

function renderListening() {
  const activity = getCurrentListening();
  els.activitySummary.textContent = activity.summary;
  els.targetPhrase.textContent = activity.audio;
  els.listeningTitle.textContent = activity.title;
  els.listeningPrompt.textContent = "Listen to the audio and choose the best answer.";
  els.listeningQuestion.textContent = activity.question;
  els.listeningFeedback.textContent = "Escucha y responde.";
  els.listeningNextButton.classList.add("hidden");
  els.coachTip.textContent = "Escucha dos veces si hace falta y busca palabras clave.";
  els.goalTip.textContent = "Meta: acertar listening para ganar XP rapido y mantener la racha.";
  renderOptions(els.listeningOptions, activity.options, (index, button) => {
    const isCorrect = index === activity.answer;
    button.classList.add(isCorrect ? "correct" : "wrong");
    els.listeningFeedback.textContent = isCorrect
      ? `Correcto. ${activity.explanation}`
      : `Todavia no. ${activity.explanation}`;
    els.listeningNextButton.classList.remove("hidden");
    awardRewards({ points: isCorrect ? 12 : 4, xp: isCorrect ? 22 : 8, coins: isCorrect ? 5 : 1, success: isCorrect });
  });
}

function renderSpeaking() {
  const scenario = getCurrentSpeaking();
  state.speakingTargetIndex = 0;
  els.activitySummary.textContent = scenario.tips;
  els.targetPhrase.textContent = scenario.targets[state.speakingTargetIndex];
  els.speakingTitle.textContent = scenario.title;
  els.chatLog.replaceChildren();
  addMessage("coach", "Coach", scenario.opening);
  els.coachTip.textContent = scenario.tips;
  els.pronunciationFeedback.textContent = "Habla o escribe para recibir feedback.";
  els.grammarFeedback.replaceChildren(makeListItem("Sin respuestas todavia."));
  els.typedAnswer.value = "";
  els.goalTip.textContent = "Meta: lograr buena pronunciacion y oraciones completas para desbloquear la insignia Speaking.";
  updateGuideSpeakingState(false, "Listo para hablar contigo.");
  updateMicListeningState(false, "En espera.");
}

function renderReading() {
  const activity = getCurrentReading();
  els.activitySummary.textContent = activity.summary;
  els.targetPhrase.textContent = activity.question;
  els.readingTitle.textContent = activity.title;
  els.readingPassage.textContent = activity.passage;
  els.readingQuestion.textContent = activity.question;
  els.readingFeedback.textContent = "Lee con calma y elige la mejor opcion.";
  els.readingNextButton.classList.add("hidden");
  els.coachTip.textContent = "Subraya mentalmente nombres, tiempos y detalles importantes.";
  els.goalTip.textContent = "Meta: completar lecturas con precision para subir lectura de nivel.";
  renderOptions(els.readingOptions, activity.options, (index, button) => {
    const isCorrect = index === activity.answer;
    button.classList.add(isCorrect ? "correct" : "wrong");
    els.readingFeedback.textContent = isCorrect
      ? `Correcto. ${activity.explanation}`
      : `Revisa otra vez. ${activity.explanation}`;
    els.readingNextButton.classList.remove("hidden");
    awardRewards({ points: isCorrect ? 10 : 3, xp: isCorrect ? 18 : 6, coins: isCorrect ? 4 : 1, success: isCorrect });
  });
}

function renderWriting() {
  const activity = getCurrentWriting();
  els.activitySummary.textContent = activity.summary;
  els.targetPhrase.textContent = activity.goal;
  els.writingTitle.textContent = activity.title;
  els.writingPrompt.textContent = activity.prompt;
  els.writingGoal.textContent = activity.goal;
  els.writingAnswer.value = "";
  els.writingFeedback.textContent = "Escribe tu respuesta para recibir feedback local.";
  els.writingNextButton.classList.add("hidden");
  els.coachTip.textContent = "Escribe frases completas con sujeto, verbo y detalle.";
  els.goalTip.textContent = "Meta: escribir 2 a 4 oraciones claras para mejorar writing y sumar XP.";
}

function renderShopModule() {
  els.activitySummary.textContent = "En esta seccion compras accesorios con monedas y equipas tu avatar.";
  els.targetPhrase.textContent = "Gana monedas practicando. Mientras mas nivel tengas, mejores items se desbloquean.";
  els.coachTip.textContent = "Visita la tienda cuando juntes monedas o subas de nivel.";
  els.goalTip.textContent = "Meta: practicar, ganar monedas y desbloquear accesorios mas bonitos.";
}

function renderOptions(container, options, onChoose) {
  container.replaceChildren();
  options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = optionText;
    button.addEventListener("click", () => {
      Array.from(container.children).forEach((child) => child.disabled = true);
      onChoose(index, button);
    });
    container.append(button);
  });
}

function playCurrentTargetAudio() {
  if (state.module === "listening") {
    speak(getCurrentListening().audio);
    return;
  }
  if (state.module === "speaking") {
    speak(getCurrentSpeaking().targets[state.speakingTargetIndex]);
    return;
  }
  if (state.module === "reading") {
    speak(getCurrentReading().passage);
    return;
  }
  speak(getCurrentWriting().sample);
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    els.voiceStatus.textContent = "Voz no disponible";
    els.micButton.disabled = true;
    updateMicListeningState(false, "Microfono no disponible.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;

  recognition.addEventListener("start", () => {
    state.listening = true;
    els.micButton.textContent = "Detener";
    els.micButton.classList.add("recording");
    els.voiceStatus.textContent = "Escuchando";
    updateMicListeningState(true, "Escuchando tu voz...");
  });

  recognition.addEventListener("result", (event) => {
    const results = Array.from(event.results[0] || []);
    const transcript = results[0]?.transcript || "";
    if (transcript) {
      els.typedAnswer.value = transcript;
      submitSpeakingAnswer(transcript, results.map((item) => item.transcript));
    }
  });

  recognition.addEventListener("error", (event) => {
    updateMicListeningState(false, readableSpeechError(event.error));
    addMessage("system", "Sistema", readableSpeechError(event.error));
  });

  recognition.addEventListener("end", () => {
    state.listening = false;
    els.micButton.textContent = "Hablar";
    els.micButton.classList.remove("recording");
    els.voiceStatus.textContent = "Voz local";
    updateMicListeningState(false, "En espera.");
  });

  state.recognition = recognition;
}

function readableSpeechError(errorCode) {
  const errors = {
    "not-allowed": "Activa el permiso de microfono para practicar con voz.",
    "no-speech": "No escuche una frase clara. Intenta de nuevo mas cerca del microfono.",
    "audio-capture": "El telefono no entrego audio del microfono.",
    "network": "El reconocimiento de voz del telefono no respondio. Puedes escribir la frase."
  };
  return errors[errorCode] || "No pude escuchar bien. Intenta otra vez o escribe tu respuesta.";
}

function toggleListening() {
  if (!state.recognition || state.module !== "speaking") return;
  if (state.listening) {
    state.recognition.stop();
    return;
  }
  try {
    state.recognition.start();
  } catch {
    addMessage("system", "Sistema", "Espera un segundo antes de volver a grabar.");
  }
}

function submitSpeakingAnswer(rawAnswer, alternatives = []) {
  if (state.module !== "speaking") return;
  const answer = rawAnswer.trim();
  if (!answer) return;
  addMessage("student", "You", answer);
  els.typedAnswer.value = "";

  const target = getCurrentSpeaking().targets[state.speakingTargetIndex];
  const pronunciation = scorePronunciation(alternatives.length ? alternatives : [answer], target);
  const grammar = checkGrammar(answer);
  const coachResponse = buildCoachResponse(pronunciation.score, grammar);

  updateFeedback(pronunciation, grammar, coachResponse);
  addMessage("coach", "Coach", coachResponse);
  speak(coachResponse);
  awardRewards({
    points: Math.max(1, Math.round(pronunciation.score / 10)),
    xp: Math.max(6, Math.round(pronunciation.score / 4)),
    coins: pronunciation.score >= 80 ? 6 : pronunciation.score >= 60 ? 3 : 1,
    success: pronunciation.score >= 70 && grammar.length === 0
  });
}

function nextSpeakingTarget() {
  if (state.module !== "speaking") return;
  const scenario = getCurrentSpeaking();
  state.speakingTargetIndex = (state.speakingTargetIndex + 1) % scenario.targets.length;
  const nextTarget = scenario.targets[state.speakingTargetIndex];
  els.targetPhrase.textContent = nextTarget;
  addMessage("coach", "Coach", getFollowUpPrompt());
  speak(nextTarget);
}

function getFollowUpPrompt() {
  const prompts = [
    "Good. Now answer with a complete sentence.",
    "Nice. Try this next sentence.",
    "Great. Speak slowly and clearly.",
    "Good work. Let's continue."
  ];
  return prompts[state.turnCount % prompts.length];
}

function buildCoachResponse(score, grammar) {
  if (score >= 86 && grammar.length === 0) {
    return "Excellent. Your sentence is clear. Try the next one.";
  }
  if (score >= 68 && grammar.length === 0) {
    return "Good answer. Speak a little slower and finish every word.";
  }
  if (grammar.length > 0) {
    return `Good try. Correct it like this: ${grammar[0].fix}`;
  }
  return "Good effort. Listen to the model phrase and try again.";
}

function scorePronunciation(alternatives, target) {
  const scored = alternatives.map((phrase) => ({
    phrase,
    score: phraseSimilarity(phrase, target)
  })).sort((a, b) => b.score - a.score);
  const best = scored[0] || { phrase: "", score: 0 };
  const missing = missingWords(best.phrase, target);
  const trouble = troubleSounds(target, best.phrase);

  let message = `El telefono escucho: "${best.phrase}". Puntaje: ${best.score}.`;
  if (missing.length) {
    message += ` Repite con cuidado: ${missing.slice(0, 4).join(", ")}.`;
  } else if (best.score >= 86) {
    message += " Muy claro.";
  } else {
    message += " Buen intento; escucha el modelo y prueba mas lento.";
  }
  if (trouble.length) {
    message += ` Practica sonido: ${trouble.join(", ")}.`;
  }
  return { score: best.score, heard: best.phrase, message };
}

function phraseSimilarity(a, b) {
  const aWords = normalize(a).split(" ").filter(Boolean);
  const bWords = normalize(b).split(" ").filter(Boolean);
  if (!aWords.length || !bWords.length) return 0;
  const wordHits = bWords.filter((word) => aWords.includes(word)).length / bWords.length;
  const joinedScore = 1 - levenshtein(normalize(a), normalize(b)) / Math.max(normalize(a).length, normalize(b).length, 1);
  return Math.max(0, Math.min(100, Math.round((wordHits * 0.62 + joinedScore * 0.38) * 100)));
}

function missingWords(answer, target) {
  const answerWords = new Set(normalize(answer).split(" ").filter(Boolean));
  return normalize(target).split(" ").filter((word) => word && !answerWords.has(word));
}

function troubleSounds(target, heard) {
  const normalizedTarget = normalize(target);
  const normalizedHeard = normalize(heard);
  const checks = [
    { key: "th", words: ["the", "there", "three", "thank", "with"] },
    { key: "v", words: ["visit", "very", "live", "have"] },
    { key: "h", words: ["have", "headache", "homework", "how"] },
    { key: "final s", words: ["hurts", "friends", "years", "classes"] }
  ];
  return checks
    .filter((check) => check.words.some((word) => normalizedTarget.includes(word)) && check.words.every((word) => !normalizedHeard.includes(word)))
    .map((check) => check.key);
}

function checkGrammar(answer) {
  const text = ` ${answer.toLowerCase().replace(/[.,!?]/g, " ")} `;
  const rules = [
    { pattern: /\bi am agree\b/, fix: "I agree.", why: "No uses 'am' con agree." },
    { pattern: /\bpeople is\b/, fix: "People are...", why: "People usa are." },
    { pattern: /\bhe have\b/, fix: "He has...", why: "Con he/she/it usa has." },
    { pattern: /\bshe have\b/, fix: "She has...", why: "Con he/she/it usa has." },
    { pattern: /\bhe go\b/, fix: "He goes...", why: "En presente simple agrega s/es." },
    { pattern: /\bshe go\b/, fix: "She goes...", why: "En presente simple agrega s/es." },
    { pattern: /\bcan to\b/, fix: "I can go / I can speak.", why: "Despues de can usa verbo base." },
    { pattern: /\bwant go\b/, fix: "I want to go.", why: "Usa want to + verb." },
    { pattern: /\bvery like\b/, fix: "I really like...", why: "Usa really like, no very like." },
    { pattern: /\bdepend of\b/, fix: "It depends on...", why: "La expresion correcta es depend on." },
    { pattern: /\bgo to home\b/, fix: "I go home.", why: "Home no necesita to en esta frase." },
    { pattern: /\bi have (\d{1,2}) years\b/, fix: "I am ... years old.", why: "Para edad usa I am." },
    { pattern: /\bmany homework\b/, fix: "A lot of homework.", why: "Homework es incontable." },
    { pattern: /\bi no\b/, fix: "I do not...", why: "Para negar usa do not / don't." },
    { pattern: /\bi am go\b/, fix: "I am going...", why: "Usa am going para una accion en progreso." }
  ];
  const hits = rules.filter((rule) => rule.pattern.test(text));
  if (!hits.length && answer.trim().split(/\s+/).length < 3) {
    hits.push({ fix: "Use a complete sentence.", why: "Intenta sujeto + verbo + informacion." });
  }
  return hits;
}

function updateFeedback(pronunciation, grammar, coachResponse) {
  els.pronunciationMeter.style.width = `${pronunciation.score}%`;
  els.pronunciationFeedback.textContent = pronunciation.message;
  els.grammarFeedback.replaceChildren();

  if (!grammar.length) {
    els.grammarFeedback.append(makeListItem("Sin errores comunes detectados."));
  } else {
    grammar.forEach((hit) => {
      els.grammarFeedback.append(makeListItem(`${hit.fix} ${hit.why}`));
    });
  }
  els.coachTip.textContent = coachResponse;
}

function checkWritingAnswer() {
  if (state.module !== "writing") return;
  const answer = els.writingAnswer.value.trim();
  if (!answer) return;
  const grammar = checkGrammar(answer);
  const sentenceCount = answer.split(/[.!?]+/).filter((item) => item.trim()).length;
  const wordCount = answer.split(/\s+/).filter(Boolean).length;
  const score = Math.max(20, Math.min(100, 35 + (sentenceCount * 18) + Math.min(wordCount, 30)));
  const messages = [
    `<p><strong>Puntaje estimado:</strong> ${score}%.</p>`,
    `<p><strong>Longitud:</strong> ${wordCount} palabras y ${sentenceCount} oraciones.</p>`
  ];

  if (grammar.length) {
    messages.push(`<p><strong>Correccion sugerida:</strong> ${grammar[0].fix}</p>`);
  } else {
    messages.push("<p><strong>Gramatica:</strong> No detecte errores comunes en esta revision local.</p>");
  }

  if (wordCount < 8) {
    messages.push("<p><strong>Consejo:</strong> Agrega un poco mas de detalle para sonar mas natural.</p>");
  } else {
    messages.push("<p><strong>Consejo:</strong> Buen trabajo. Revisa mayusculas y puntuacion final.</p>");
  }

  els.writingFeedback.innerHTML = messages.join("");
  els.pronunciationMeter.style.width = "0%";
  els.pronunciationFeedback.textContent = "Este modulo evalua escritura, no pronunciacion.";
  els.grammarFeedback.replaceChildren();
  if (!grammar.length) {
    els.grammarFeedback.append(makeListItem("Writing check completed with no common-rule errors."));
  } else {
    grammar.forEach((hit) => els.grammarFeedback.append(makeListItem(`${hit.fix} ${hit.why}`)));
  }
  els.coachTip.textContent = "Reescribe tu respuesta y mejora una parte cada vez.";
  awardRewards({
    points: Math.round(score / 12),
    xp: Math.max(10, Math.round(score / 5)),
    coins: score >= 80 ? 5 : 2,
    success: score >= 70 && !grammar.length
  });
  els.writingNextButton.classList.remove("hidden");
}

function showWritingSample() {
  els.writingFeedback.innerHTML = `<p><strong>Ejemplo:</strong> ${getCurrentWriting().sample}</p>`;
}

function addMessage(type, author, text) {
  const message = document.createElement("article");
  message.className = `message ${type}`;
  const label = document.createElement("small");
  label.textContent = author;
  const body = document.createElement("div");
  body.textContent = text;
  message.append(label, body);
  els.chatLog.append(message);
  els.chatLog.scrollTop = els.chatLog.scrollHeight;
}

function updateGuideSpeakingState(isSpeaking, label) {
  if (!els.speakingGuideIndicator || !els.speakingGuideStatus) return;
  els.speakingGuideIndicator.classList.toggle("is-active", isSpeaking);
  els.speakingGuideStatus.textContent = label;
}

function updateMicListeningState(isListening, label) {
  if (!els.micSignalIndicator || !els.micSignalStatus) return;
  els.micSignalIndicator.classList.toggle("is-listening", isListening);
  els.micSignalStatus.textContent = label;
}

function makeListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.addEventListener("start", () => {
    if (state.module === "speaking") {
      updateGuideSpeakingState(true, "El guia esta hablando...");
    }
  });
  utterance.addEventListener("end", () => {
    if (state.module === "speaking") {
      updateGuideSpeakingState(false, "Tu turno para responder.");
    }
  });
  utterance.addEventListener("error", () => {
    if (state.module === "speaking") {
      updateGuideSpeakingState(false, "Listo para hablar contigo.");
    }
  });
  window.speechSynthesis.speak(utterance);
}

function awardRewards({ points, xp, coins, success }) {
  state.turnCount += 1;
  state.totalPoints += points;
  state.modulePoints += points;
  state.bestScore = Math.max(state.bestScore, points > 100 ? 100 : points);
  state.completedCount += 1;
  state.xp += xp;
  state.coins += coins;
  state.streak = success ? state.streak + 1 : 0;
  maybeLevelUp();
  unlockBadgeIfNeeded();
  persistStats();
  updateStats();
}

function updateStats() {
  els.turnCount.textContent = state.turnCount;
  els.bestScore.textContent = state.bestScore;
  els.completedCount.textContent = state.completedCount;
  els.modulePoints.textContent = state.modulePoints;
  els.scoreStatus.textContent = `${state.totalPoints} puntos`;
  els.levelValue.textContent = state.level;
  els.rankLabel.textContent = getRankLabel(state.level);
  els.streakValue.textContent = state.streak;
  els.coinsValue.textContent = state.coins;
  els.shopCoinsPill.textContent = `${state.coins} monedas`;
  els.achievementValue.textContent = state.achievement;
  els.achievementHint.textContent = getAchievementHint();
  const currentLevelBase = getXpFloor(state.level);
  const nextLevelBase = getXpFloor(state.level + 1);
  const progress = Math.max(0, state.xp - currentLevelBase);
  const span = Math.max(1, nextLevelBase - currentLevelBase);
  const percent = Math.min(100, Math.round((progress / span) * 100));
  els.xpMeter.style.width = `${percent}%`;
  els.xpText.textContent = `${progress} / ${span} XP para el siguiente nivel`;
  renderBadges();
  renderAvatar();
  renderShop();
}

function persistStats() {
  localStorage.setItem("a2-turns", String(state.turnCount));
  localStorage.setItem("a2-best", String(state.bestScore));
  localStorage.setItem("a2-points", String(state.totalPoints));
  localStorage.setItem("a2-completed", String(state.completedCount));
  localStorage.setItem("a2-xp", String(state.xp));
  localStorage.setItem("a2-level", String(state.level));
  localStorage.setItem("a2-streak", String(state.streak));
  localStorage.setItem("a2-coins", String(state.coins));
  localStorage.setItem("a2-achievement", state.achievement);
  localStorage.setItem("a2-badges", JSON.stringify(state.badgeState));
  localStorage.setItem("a2-avatar", JSON.stringify(state.avatarConfig));
  localStorage.setItem("a2-owned-items", JSON.stringify(state.ownedItems));
}

function updateOnlineStatus() {
  els.networkStatus.textContent = navigator.onLine ? "Online" : "Offline";
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  let reloadingForNewWorker = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloadingForNewWorker) return;
    reloadingForNewWorker = true;
    window.location.reload();
  });
  navigator.serviceWorker.register(`sw.js?v=${CACHE_VERSION}`, { updateViaCache: "none" }).then((registration) => {
    state.swRegistration = registration;
    registration.update();
    return navigator.serviceWorker.ready;
  }).then((registration) => {
    state.swRegistration = registration;
  }).catch(() => {
    els.networkStatus.textContent = "Sin cache";
  });
  updateInstallButtonState();
}

async function refreshAppFromInternet() {
  if (!navigator.onLine) {
    els.coachTip.textContent = "Conecta el celular a internet para actualizar la app.";
    els.networkStatus.textContent = "Sin internet";
    return;
  }

  els.refreshAppButton.disabled = true;
  const originalText = els.refreshAppButton.textContent;
  els.refreshAppButton.textContent = "Actualizando...";
  els.coachTip.textContent = "Buscando version nueva desde internet.";

  try {
    let registration = state.swRegistration;
    if (!registration && "serviceWorker" in navigator) {
      registration = await navigator.serviceWorker.getRegistration();
    }
    if (!registration && "serviceWorker" in navigator) {
      registration = await navigator.serviceWorker.ready;
    }

    if (registration) {
      state.swRegistration = registration;
      if (registration.active) {
        registration.active.postMessage({ type: "CLEAR_RUNTIME_CACHE" });
      }
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "CLEAR_RUNTIME_CACHE" });
      }
      await registration.update();
      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }
    }

    if ("caches" in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((key) => caches.delete(key)));
    }

    await warmCoreAssets();
    els.networkStatus.textContent = "Actualizada";
    window.location.replace(`./index.html?v=${CACHE_VERSION}&r=${Date.now()}`);
  } catch {
    els.coachTip.textContent = "No pude actualizar en este momento. Intenta otra vez con mejor internet.";
    els.networkStatus.textContent = "Error al actualizar";
    els.refreshAppButton.disabled = false;
    els.refreshAppButton.textContent = originalText;
  }
}

function isStandaloneMode() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

async function warmCoreAssets() {
  const stamp = `${CACHE_VERSION}-${Date.now()}`;
  const assets = [
    `./index.html?v=${stamp}`,
    `./styles.css?v=${stamp}`,
    `./app.js?v=${stamp}`,
    `./manifest.webmanifest?v=${stamp}`,
    `./icons/icon-192.webp?v=${stamp}`,
    `./icons/icon-512.webp?v=${stamp}`,
    `./assets/icon-192.png?v=${stamp}`,
    `./assets/icon-512.png?v=${stamp}`
  ];
  await Promise.all(assets.map((url) => fetch(url, { cache: "no-store" })));
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/o'clock/g, "oclock")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, row) => [row]);
  for (let col = 0; col <= a.length; col += 1) matrix[0][col] = col;
  for (let row = 1; row <= b.length; row += 1) {
    for (let col = 1; col <= a.length; col += 1) {
      matrix[row][col] = b[row - 1] === a[col - 1]
        ? matrix[row - 1][col - 1]
        : Math.min(matrix[row - 1][col - 1] + 1, matrix[row][col - 1] + 1, matrix[row - 1][col] + 1);
    }
  }
  return matrix[b.length][a.length];
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function loadBadgeState() {
  try {
    return {
      listening: false,
      speaking: false,
      reading: false,
      writing: false,
      ...(JSON.parse(localStorage.getItem("a2-badges") || "{}"))
    };
  } catch {
    return { listening: false, speaking: false, reading: false, writing: false };
  }
}

function loadAvatarConfig() {
  try {
    return {
      baseId: "starter-sky",
      tone: "tone-warm",
      hair: "hair-short",
      shirt: "shirt-teal",
      theme: "theme-sky",
      equippedFront: "glasses",
      equippedBack: "none-back",
      ...(JSON.parse(localStorage.getItem("a2-avatar") || "{}"))
    };
  } catch {
    return {
      baseId: "starter-sky",
      tone: "tone-warm",
      hair: "hair-short",
      shirt: "shirt-teal",
      theme: "theme-sky",
      equippedFront: "glasses",
      equippedBack: "none-back"
    };
  }
}

function showWelcomeOverlayIfNeeded() {
  if (state.learnerGender) {
    els.welcomeOverlay.classList.add("hidden");
    els.welcomeOverlay.setAttribute("aria-hidden", "true");
    return;
  }
  els.welcomeOverlay.classList.remove("hidden");
  els.welcomeOverlay.setAttribute("aria-hidden", "false");
}

function setLearnerGender(gender) {
  state.learnerGender = gender;
  localStorage.setItem("a2-learner-gender", gender);
  applyStarterAvatarFromGender(gender);
  els.welcomeOverlay.classList.add("hidden");
  els.welcomeOverlay.setAttribute("aria-hidden", "true");
}

function applyStarterAvatarFromGender(gender) {
  const starterBase = gender === "girl"
    ? avatarBases.find((item) => item.id === "night-dreamer") || avatarBases[0]
    : avatarBases.find((item) => item.id === "starter-sky") || avatarBases[0];
  state.avatarConfig.baseId = starterBase.id;
  state.avatarConfig.tone = starterBase.tone;
  state.avatarConfig.hair = starterBase.hair;
  state.avatarConfig.shirt = starterBase.shirt;
  state.avatarConfig.theme = starterBase.theme;
  persistStats();
  renderAvatar();
}

function loadOwnedItems() {
  try {
    const saved = JSON.parse(localStorage.getItem("a2-owned-items") || "[]");
    const defaults = shopItems.filter((item) => item.free).map((item) => item.id);
    return Array.from(new Set([...defaults, ...saved]));
  } catch {
    return shopItems.filter((item) => item.free).map((item) => item.id);
  }
}

function getXpFloor(level) {
  return (level - 1) * 120;
}

function maybeLevelUp() {
  let leveledUp = false;
  while (state.xp >= getXpFloor(state.level + 1)) {
    state.level += 1;
    leveledUp = true;
  }
  if (leveledUp) {
    state.achievement = `Subiste a nivel ${state.level}`;
    els.coachTip.textContent = `Excelente. Ahora eres nivel ${state.level}. Sigue practicando para mantener la racha.`;
  }
}

function unlockBadgeIfNeeded() {
  const current = state.module;
  const thresholdReached =
    (current === "speaking" && state.streak >= 2) ||
    (current === "listening" && state.modulePoints >= 20) ||
    (current === "reading" && state.modulePoints >= 18) ||
    (current === "writing" && state.modulePoints >= 14);

  if (thresholdReached && !state.badgeState[current]) {
    state.badgeState[current] = true;
    state.achievement = `${capitalize(current)} badge unlocked`;
    state.coins += 8;
  }
}

function renderBadges() {
  els.badgeGrid.replaceChildren();
  [
    { key: "listening", label: "Listening Star" },
    { key: "speaking", label: "Speaking Star" },
    { key: "reading", label: "Reading Star" },
    { key: "writing", label: "Writing Star" }
  ].forEach((badge) => {
    const item = document.createElement("div");
    item.className = `badge-item${state.badgeState[badge.key] ? " unlocked" : ""}`;
    const title = document.createElement("strong");
    title.textContent = badge.label;
    const status = document.createElement("span");
    status.textContent = state.badgeState[badge.key] ? "Unlocked" : "Locked";
    item.append(title, status);
    els.badgeGrid.append(item);
  });
}

function getRankLabel(level) {
  if (level >= 8) return "A2 Hero";
  if (level >= 6) return "Fluent Climber";
  if (level >= 4) return "Skill Builder";
  if (level >= 2) return "Active Learner";
  return "Starter";
}

function getAchievementHint() {
  if (state.achievement === "Sin insignias") {
    return "Completa actividades, mantén racha y desbloquea insignias.";
  }
  return `XP total: ${state.xp}. Sigue jugando para conseguir la siguiente recompensa.`;
}

function setupAvatarMenus() {
  els.avatarBaseSelect.replaceChildren();
  avatarBases.forEach((base) => {
    const option = document.createElement("option");
    option.value = base.id;
    option.textContent = base.label;
    els.avatarBaseSelect.append(option);
  });
  els.avatarThemeSelect.replaceChildren();
  avatarThemes.forEach((theme) => {
    const option = document.createElement("option");
    option.value = theme.id;
    option.textContent = theme.label;
    els.avatarThemeSelect.append(option);
  });
}

function renderAvatar() {
  const base = avatarBases.find((item) => item.id === state.avatarConfig.baseId) || avatarBases[0];
  els.avatarBaseSelect.value = base.id;
  els.avatarThemeSelect.value = state.avatarConfig.theme;
  renderAvatarNodes(els.avatarPreview, els.avatarBody, els.avatarAccessoryFront, els.avatarAccessoryBack, "avatar-preview", false);
  renderAvatarNodes(els.topAvatarPreview, els.topAvatarBody, els.topAvatarAccessoryFront, els.topAvatarAccessoryBack, "top-avatar-preview", true);
  renderAvatarNodes(els.assistantAvatarPreview, els.assistantAvatarBody, els.assistantAvatarAccessoryFront, els.assistantAvatarAccessoryBack, "assistant-avatar-preview", true);
  updateAssistantMessage();
}

function renderAvatarNodes(preview, body, front, back, previewClass, compact) {
  paintAvatarPreview(preview, body, front, back, state.avatarConfig, previewClass, compact);
}

function paintAvatarPreview(preview, body, front, back, config, previewClass, compact) {
  preview.className = `${previewClass} ${config.theme}`;
  body.className = `avatar-body${compact ? " compact-avatar" : ""} ${config.tone} ${config.shirt}`;
  const hair = body.querySelector(".avatar-hair");
  hair.className = `avatar-hair ${config.hair}`;
  applyAccessory(front, config.equippedFront, "front");
  applyAccessory(back, config.equippedBack, "back");
}

function applyAccessory(node, itemId, slot) {
  const item = shopItems.find((entry) => entry.id === itemId && entry.slot === slot);
  const classBase = slot === "front" ? "avatar-accessory accessory-front" : "avatar-accessory accessory-back";
  node.className = `${classBase}${item && item.className ? ` ${item.className}` : ""}`;
  node.replaceChildren();
  if (item && (item.className === "accessory-glasses" || item.className === "accessory-star-glasses")) {
    node.append(document.createElement("span"));
  }
}

function renderShop() {
  els.shopGrid.replaceChildren();
  shopItems.forEach((item) => {
    const card = document.createElement("article");
    card.className = `shop-item ${item.rarity}`;
    const owned = state.ownedItems.includes(item.id);
    const canAfford = state.coins >= item.price;
    const levelReady = state.level >= item.level;
    const equipped = item.slot === "front"
      ? state.avatarConfig.equippedFront === item.id
      : state.avatarConfig.equippedBack === item.id;

    const title = document.createElement("div");
    title.className = "shop-item-top";
    title.innerHTML = `<strong>${item.name}</strong><span class="shop-rarity">${item.rarity.toUpperCase()}</span>`;

    const preview = createShopItemPreview(item);

    const description = document.createElement("p");
    description.textContent = item.description;

    const meta = document.createElement("div");
    meta.className = "shop-item-meta";
    meta.innerHTML = `<span class="shop-price">${item.free ? "Gratis" : `${item.price} monedas`}</span><span class="shop-level">Nivel ${item.level}+</span>`;

    const actions = document.createElement("div");
    actions.className = "shop-item-actions";
    const stateText = document.createElement("span");
    stateText.className = "shop-state";
    stateText.textContent = equipped ? "Equipado" : owned ? "Disponible" : !levelReady ? "Nivel bloqueado" : !canAfford ? "Faltan monedas" : "Listo para comprar";
    const button = document.createElement("button");
    button.type = "button";
    button.className = owned ? "ghost-button" : "secondary-button";
    button.textContent = owned ? (equipped ? "Usando" : "Equipar") : item.free ? "Reclamar" : "Comprar";
    button.disabled = equipped || (!owned && (!levelReady || (!item.free && !canAfford)));
    button.addEventListener("click", () => handleShopAction(item));
    actions.append(stateText, button);

    card.append(title, preview, description, meta, actions);
    els.shopGrid.append(card);
  });
}

function createShopItemPreview(item) {
  const base = avatarBases[(item.level - 1) % avatarBases.length];
  const preview = document.createElement("div");
  preview.className = "shop-preview";

  const stage = document.createElement("div");
  stage.className = "shop-preview-stage";

  const back = document.createElement("div");
  back.className = "avatar-accessory accessory-back";

  const body = document.createElement("div");
  body.className = "avatar-body compact-avatar shop-preview-body";

  const head = document.createElement("div");
  head.className = "avatar-head";

  const hair = document.createElement("div");
  hair.className = "avatar-hair";

  const face = document.createElement("div");
  face.className = "avatar-face";

  const eyeLeft = document.createElement("span");
  eyeLeft.className = "eye left";
  const eyeRight = document.createElement("span");
  eyeRight.className = "eye right";
  const mouth = document.createElement("span");
  mouth.className = "mouth";
  face.append(eyeLeft, eyeRight, mouth);

  const front = document.createElement("div");
  front.className = "avatar-accessory accessory-front";

  const torso = document.createElement("div");
  torso.className = "avatar-torso";

  head.append(hair, face, front);
  body.append(head, torso);
  stage.append(back, body);
  preview.append(stage);

  const config = {
    tone: base.tone,
    hair: base.hair,
    shirt: base.shirt,
    theme: base.theme,
    equippedFront: item.slot === "front" ? item.id : "glasses",
    equippedBack: item.slot === "back" ? item.id : "none-back"
  };

  paintAvatarPreview(preview, body, front, back, config, "shop-preview", true);
  return preview;
}

function updateInstallButtonState() {
  const installed = isStandaloneMode();
  els.installButton.disabled = installed;
  els.installButton.textContent = installed ? "App instalada" : state.installPrompt ? "Instalar app" : "Como instalar";
}

function updateAssistantMessage() {
  const affordable = shopItems.find((item) => !state.ownedItems.includes(item.id) && state.level >= item.level && state.coins >= item.price);
  const locked = shopItems.find((item) => !state.ownedItems.includes(item.id) && state.level < item.level);
  const pending = shopItems.find((item) => !state.ownedItems.includes(item.id) && state.level >= item.level && state.coins < item.price);

  if (affordable) {
    els.assistantTitle.textContent = "Psst, tengo una idea";
    els.assistantMessage.textContent = `Ya juntaste ${state.coins} monedas. Este es un buen momento para comprar ${affordable.name}.`;
    return;
  }
  if (locked) {
    els.assistantTitle.textContent = "Vamos por el siguiente nivel";
    els.assistantMessage.textContent = `Si llegas al nivel ${locked.level}, desbloqueas ${locked.name}.`;
    return;
  }
  if (pending) {
    els.assistantTitle.textContent = "Casi lo logras";
    els.assistantMessage.textContent = `Te faltan ${Math.max(0, pending.price - state.coins)} monedas para comprar ${pending.name}.`;
    return;
  }
  els.assistantTitle.textContent = "Estoy aqui para ayudarte";
  els.assistantMessage.textContent = "Practica actividades para ganar monedas, subir de nivel y desbloquear accesorios nuevos.";
}

function hideAssistantWidget() {
  els.assistantWidget.classList.add("hidden-widget");
  els.assistantShowButton.classList.remove("hidden");
  localStorage.setItem("a2-hide-assistant", "yes");
}

function jumpToShop() {
  switchModule("shop");
}

function showAssistantWidget() {
  els.assistantWidget.classList.remove("hidden-widget");
  els.assistantShowButton.classList.add("hidden");
  localStorage.removeItem("a2-hide-assistant");
}

function cycleAssistantTip() {
  const tips = [
    "Si haces listening primero, normalmente juntas monedas rapido.",
    "Las actividades con buena racha ayudan a subir de nivel mas pronto.",
    "Cuando desbloquees un item raro, pruebalo en tu avatar para ver el cambio.",
    "Speaking y writing suelen dar buen progreso si completas frases enteras.",
    "Revisa la tienda cada vez que subas de nivel. A veces se abre algo nuevo."
  ];
  const index = (state.turnCount + state.level + state.coins) % tips.length;
  els.assistantTitle.textContent = "Consejo rapido";
  els.assistantMessage.textContent = tips[index];
}

function handleShopAction(item) {
  const owned = state.ownedItems.includes(item.id);
  if (!owned) {
    if (state.level < item.level) return;
    if (!item.free && state.coins < item.price) return;
    if (!item.free) {
      state.coins -= item.price;
    }
    state.ownedItems.push(item.id);
    state.achievement = `${item.name} unlocked`;
  }
  if (item.slot === "front") {
    state.avatarConfig.equippedFront = item.id;
  } else {
    state.avatarConfig.equippedBack = item.id;
  }
  persistStats();
  updateStats();
}

function randomizeAvatar() {
  const base = avatarBases[Math.floor(Math.random() * avatarBases.length)];
  const theme = avatarThemes[Math.floor(Math.random() * avatarThemes.length)];
  const frontChoices = shopItems.filter((item) => item.slot === "front" && state.ownedItems.includes(item.id));
  const backChoices = shopItems.filter((item) => item.slot === "back" && state.ownedItems.includes(item.id));
  state.avatarConfig.baseId = base.id;
  state.avatarConfig.tone = base.tone;
  state.avatarConfig.hair = base.hair;
  state.avatarConfig.shirt = base.shirt;
  state.avatarConfig.theme = theme.id;
  state.avatarConfig.equippedFront = frontChoices[Math.floor(Math.random() * frontChoices.length)].id;
  state.avatarConfig.equippedBack = backChoices[Math.floor(Math.random() * backChoices.length)].id;
  persistStats();
  renderAvatar();
  renderShop();
}

if (localStorage.getItem("a2-hide-assistant") === "yes") {
  els.assistantWidget.classList.add("hidden-widget");
  els.assistantShowButton.classList.remove("hidden");
}

init();
