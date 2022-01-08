import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnn9k4bAtyw6ugZSy34Xc59Ui1lZXpMQs",
    authDomain: "crwn-db-ffe9e.firebaseapp.com",
    projectId: "crwn-db-ffe9e",
    storageBucket: "crwn-db-ffe9e.appspot.com",
    messagingSenderId: "440844730252",
    appId: "1:440844730252:web:7fb2696ebf94ee6687e0a9",
    measurementId: "G-RKMEVF4GXL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseAuth = getAuth();
firebaseAuth.languageCode = 'fr';

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    "prompt": "select_account",
    'login_hint': 'user@example.com'
})

const googleAuth = () => signInWithPopup(firebaseAuth, provider);

export {googleAuth, firebaseAuth}