self.addEventListener('install', (event) => {
    console.log('Service Worker: Install Event');
    event.waitUntil(
        caches.open('simon-says-cache').then((cache) => {
            console.log('Service Worker: Caching Files');
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/styles/styles.scss',
                '/assets/script.js',
                '/Round/SpamClick/script.js',
                '/Round/LandscapeMode/script.js',
                '/Round/Shakeit/script.js',
                '/Round/ColorCheck/script.js',
                '/Round/VoiceCheck/script.js',
                '/Round/WordCheck/script.js',
                '/Round/Trivia/script.js',
                '/Round/Spamclick/script.js',
                '/Round/Shakeit/script.js',
                '/Round/HowManyVibration/script.js',
                '/Round/NotifCheck/script.js',
                '/Round/LumesCheck/script.js',
                '/Round/Chifoumi/script.js',
                '/Round/BatteryCheck/script.js',
                '/manifest.json',
                'vite.config.json'
            ]);
        }).catch(error => {
            console.error('Service Worker: Caching Failed', error);
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetch Event', event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('Service Worker: Cache Hit', event.request.url);
                return response;
            }
            console.log('Service Worker: Cache Miss', event.request.url);
            return fetch(event.request);
        }).catch(error => {
            console.error('Service Worker: Fetch Failed', error);
        })
    );
});
