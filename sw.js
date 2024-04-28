const cache_name = "static_cache";
const static_assessts = ["index.html", "script.js", "style.css", "favicon.png"];
async function preCache() {
  const cache = await caches.open(cache_name);
  return cache.addAll(static_assessts);
}

self.addEventListener("install", (event) => {
  console.log("[SW] installed");
  event.waitUntil(preCache());
});
self.addEventListener("activate", (event) => {
  console.log("[SW] activated");
});
async function fetchAssets(event) {
  try {
    const response = await fetch(event.request);
    return response;
  } catch (error) {
    const cache = await caches.open(cache_name);
    return cache.match(event.request);
  }
}

self.addEventListener("fetch", (event) => {
  console.log("[SW] fetched");
  event.respondWith(fetchAssets(event));
});
