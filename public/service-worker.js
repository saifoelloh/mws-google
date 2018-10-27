console.log('Ini service worker');
var cacheName = 'mwsCache';
var fileToCache = [
  '/index.html',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/android-chrome-192x192.png',
  '/house.js',
  '/manifest.json',
  '/02-map/map.js',
  '/01-add2Number/add2Number.js',
];

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('[ServiceWorker] Caching app shell');
        cache.addAll(fileToCache);
      })
      .catch(err => {
        console.log('[ServiceWorker] Not response', err);
      }),
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key != cacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener('fetch', e => {
  let url = new URL(e.request.url);
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches
      .match(e.request)
      .then(res => {
        return res;
      })
      .catch(err => {
        console.log('Error fetching cache', err);
      }),
  );
});
