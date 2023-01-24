import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCP3L0wT1jQNotN_j7fHSXD-YQAhhrtROE",
    authDomain: "tinder-firebase-f5a32.firebaseapp.com",
    projectId: "tinder-firebase-f5a32",
    storageBucket: "tinder-firebase-f5a32.appspot.com",
    messagingSenderId: "24233684490",
    appId: "1:24233684490:web:2d685dbaade030aca639f3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;