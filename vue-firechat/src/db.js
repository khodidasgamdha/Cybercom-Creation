import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAHZ2joFQmf_0OLwYzK2EzPIhZ3j5tl1jc",
    authDomain: "vue-firechatt.firebaseapp.com",
    projectId: "vue-firechatt",
    storageBucket: "vue-firechatt.appspot.com",
    messagingSenderId: "597984850558",
    appId: "1:597984850558:web:c1d35675d8187d4c125e2f"
}

const db = firebase.initializeApp(config);

export default db;