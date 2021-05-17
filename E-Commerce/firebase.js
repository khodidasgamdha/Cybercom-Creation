import firebase from 'firebase'
// require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyC2RkIWowQ1efikzgALhowsy5FdRqZwep0',
  authDomain: 'nuxtzon.firebaseapp.com',
  projectId: 'nuxtzon',
  storageBucket: 'nuxtzon.appspot.com',
  messagingSenderId: '260753782119',
  appId: '1:260753782119:web:f8eff66e40a4dfd66d6bc2',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

export { db }
