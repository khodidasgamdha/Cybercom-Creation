importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCPd4FrqxLGwoJzG7gsoOurdSyJ-8vnFj4",
    authDomain: "pwa-demo-f5d24.firebaseapp.com",
    databaseURL: "https://pwa-demo-f5d24-default-rtdb.firebaseio.com",
    projectId: "pwa-demo-f5d24",
    storageBucket: "pwa-demo-f5d24.appspot.com",
    messagingSenderId: "260855120838",
    appId: "1:260855120838:web:2980be325e621c15c7a8c7",
    measurementId: "G-JK43J3M03W"
});

const messaging = firebase.messaging();