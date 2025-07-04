self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pwa-registro-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./registro.html",
        "./style.css",
        "./icons/logo.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});