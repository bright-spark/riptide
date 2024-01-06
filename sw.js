const CACHE_NAME = 'riptide-v1.1.1.1.1';
const urlsToCache = [
  '/',
  'favicon.ico',
  'icon.png',
  '/styles.css',
  //'/scripts.js',
  '/manifest.json'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // Check if the request URL is a YouTube video
  if (event.request.url.startsWith('https://www.youtube-nocookie.com/embed/')) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Return the cached response if found
          if (response) {
            return response;
          }

          // Otherwise, fetch the resource and add it to the cache
          return fetch(event.request).then(function(networkResponse) {
            return caches.open(CACHE_NAME).then(function(cache) {
              // Clone the response; a response can only be used once
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        })
    );
  } else {
    // For other requests, try to respond with cached content, if available
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          return response || fetch(event.request);
        })
    );
  }
});
