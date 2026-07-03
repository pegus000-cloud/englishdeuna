const CACHE_NAME = "englishdeuna-v7";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./icons/icon-192.webp",
  "./icons/icon-512.webp"
];

const NETWORK_FIRST_PATHS = new Set([
  "/english-a2-offline-coach/",
  "/english-a2-offline-coach/index.html",
  "/english-a2-offline-coach/styles.css",
  "/english-a2-offline-coach/app.js",
  "/english-a2-offline-coach/manifest.webmanifest",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.webmanifest",
  "/sw.js"
]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS.map((asset) => new Request(asset, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (!event.data) return;
  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (event.data.type === "CLEAR_RUNTIME_CACHE") {
    event.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key)))));
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const isNavigation = event.request.mode === "navigate";
  const isNetworkFirst = isNavigation || NETWORK_FIRST_PATHS.has(url.pathname);

  if (isNetworkFirst) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(staleWhileRevalidate(event.request));
});

function toCacheKey(request) {
  const url = new URL(request.url);
  return `${url.pathname}${url.hash || ""}`;
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cacheKey = toCacheKey(request);
  try {
    const response = await fetch(request, { cache: "no-store" });
    cache.put(cacheKey, response.clone());
    return response;
  } catch {
    const cached = await cache.match(cacheKey, { ignoreSearch: true });
    if (cached) return cached;
    return cache.match("./index.html");
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cacheKey = toCacheKey(request);
  const cached = await cache.match(cacheKey, { ignoreSearch: true });
  const networkPromise = fetch(request)
    .then((response) => {
      cache.put(cacheKey, response.clone());
      return response;
    })
    .catch(() => null);

  return cached || networkPromise || cache.match("./index.html");
}
