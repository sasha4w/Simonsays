document.getElementById('audio-btn').addEventListener('click', () => {
    const audio = new Audio('path/to/sound.mp3');
    audio.play().catch(err => {
        console.error('Audio permission not granted:', err);
    });
});

document.getElementById('micro-btn').addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            console.log('Microphone access granted');
            // Do something with the stream
        })
        .catch(err => {
            console.error('Microphone access not granted:', err);
        });
});

document.getElementById('notif-btn').addEventListener('click', () => {
    if (Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Notifications autorisées!');
            } else {
                console.log('Notifications not granted');
            }
        });
    } else if (Notification.permission === 'granted') {
        new Notification('Notifications déjà autorisées!');
    } else {
        console.log('Notifications not granted');
    }
});

document.getElementById('vibrate-btn').addEventListener('click', () => {
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
        console.log('Vibration effectuée');
    } else {
        console.log('Vibration non supportée par ce navigateur');
    }
});