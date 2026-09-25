self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('beatflow-v1').then((cache) => {
      return cache.addAll([
        '/Beatflow-webpage/',
        '/Beatflow-webpage/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
