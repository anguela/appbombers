var CACHE_NAME = 'my-site-cache-v5';
var urlsToCache = [
  './',
  './css/style.css',
  './img/background.png',
  './img/triatge.jpg',
  './img/habitatge.jpg',
  './img/distintiu.png',
  './afectaciohabitatge/css/style.css',
  './afectaciohabitatge/index.html',
  './triatgestart/css/style.css',
  './triatgestart/index.html',
  './index.html'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    console.log(CACHE_NAME)
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
