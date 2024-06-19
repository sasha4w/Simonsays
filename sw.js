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
