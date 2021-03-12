const webpush = require('web-push');

// console.log(webpush.generateVAPIDKeys());

const publicKey = 'BJp0Y8tAMRjCUGvFZcgHE-4eYJ15emm90SrztuzHGI8Oq1YsRS3hmusm2ELaH-5uA1Wm3JHw-qEvIzpKkuegROY';
const privateKey = 'dpJqxvokZxhIgWTo8kd-4CHTwI_6N3SM45BH-eVXgy0';

// object which get through pushSubscription method
const sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/dau5pUEA3A0:APA91bFuCq_RLFGa-bX8W3CVMXv76ULHe4qtpUgJO4QbtPMiu2FQ4dEyJsbIYqQv8cs7n1DBB4VQ6IYomDNhNNwyjvwnqazqlklAEmCy8q5u4O_p4wd2m3d8Mwdt5BtZ5VN-vYsVUlLP",
    expirationTime: null,
    keys: {
        p256dh: 
            "BG8VM-jz8yOgnUXpopeeCUcaHHumT-ES0g78Q578DH954IRp78DQPP07ikqPUoqkdkhk8jG81a7WK9bAdrKku1k",
        auth:
            "RjxrRCMmfNkj7PoHgrCEGw"
    }
};

webpush.setVapidDetails('mailto:example@gmail.com', publicKey, privateKey);

// notification data
const payLoad = {
    notification: {
        "data": {url : "https://www.youtube.com/"},
        "title": 'Angular Notification',
        "vibrate": [100, 50, 100]
    },
};

// send notification
webpush.sendNotification(sub, JSON.stringify(payLoad));