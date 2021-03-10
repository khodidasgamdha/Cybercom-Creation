const webpush = require('web-push');

// console.log(webpush.generateVAPIDKeys());

const publicKey = 'BJhcymvxluoFFk8OnPcLUvLroX_kLilcQO9NMWtATf6kNYRk3-fUekZieL_alsH63-XuEOOxTPbxTGG9KFJS6j0';
const privateKey = 'L5-VAs2m2VwOWRYluhdbGjMnJOGRE88HFn4WZdK8yl4';

// object which get through pushSubscription method
const sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/ctg_d2U2fQA:APA91bFpsOyePmp2VjnVbjKXfRgLlbWfS4J1rDcbrvbHyuANGZyTbOy9cUxr3M7tJTF4wR3A54ZROdhbBtnA1DxhppOFgI-YYMYV_mjAKECWZ5jj3SVlW6hko39kPg9z3ZAVv12Wil9_",
    expirationTime: null,
    keys: {
        p256dh: 
            "BKStCql2jyADvjER4xQ0KdIZcdUjg508blzk184FzwHe2hdon9cwLy8q_0yoTxnLVLp5Ho9iBvLxNmkpFvsbOjc",
        auth:
            "x7EToI-UXW3barb-Vw4-jg"
    },
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
webpush.sendNotification(sub, JSON.stringify(payLoad))