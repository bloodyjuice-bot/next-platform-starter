const CACHE_NAME = 'xxi-plus-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/xxi-192.png',
  './icons/xxi-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
