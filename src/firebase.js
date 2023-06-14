// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCMh02_yJMnjFGWGeVEiD-FFDVT8K_NOg",
    authDomain: "facebook-clone-210ee.firebaseapp.com",
    projectId: "facebook-clone-210ee",
    storageBucket: "facebook-clone-210ee.appspot.com",
    messagingSenderId: "843676641649",
    appId: "1:843676641649:web:14f57e50555786a4c9aed0",
    measurementId: "G-JWDLDKCEFX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;