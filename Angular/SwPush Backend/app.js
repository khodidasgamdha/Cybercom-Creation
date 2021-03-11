const webpush = require('web-push');

// console.log(webpush.generateVAPIDKeys());

const publicKey = 'BAdYgm34jLaKw1bOx0bfmzKJmsk7ICkNRx9oTSJ7Ns51fBHqiYrMoE-P4lrB-ggFl8STY_0wlUlExYSotPHZY6g';
const privateKey = 'sqT9IXJjzoxyl8wrSWPtiUUl7O4b2ycellElwNoXQuI';

// object which get through pushSubscription method
const sub = {
    endpoint:
        "https://fcm.googleapis.com/fcm/send/e1gjbex_oF4:APA91bFlc_6uaG2ef9s9pyB4g5cdjE34exJGyE594_6EOHrWjsLpDZU4iePePP7m_UFlXx5yLH0k3Vy-18ObfKDyz9y59pVVUxDMfgHsw-RIeVYusWH87L9TT6kSKflv63qmKOStZqbF",
    expirationTime: null,
    keys: {
        p256dh:
            "BC0TE5J01zAQSXRvJErQYtn8zU361PkNEpBOzCP9Fdc4MSBCIDKm4FyvGD85R4jS2stpJQoSHJn2LSA7bKeaqu4",
        auth:
            "GRPxmABWoWAiwEBZ-gpAbQ"
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
webpush.sendNotification(sub, JSON.stringify(payLoad))