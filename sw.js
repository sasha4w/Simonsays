self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('simon-says-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/styles/styles.scss',
                '/assets/script.js',
                '/Round/SpamClick/script.js',
                '/Round/LandscapeMode/script.js',
                '/manifest.json',
                'vite.config.json'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
