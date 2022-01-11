import {initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithPopup,  GoogleAuthProvider} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc, addDoc, collection} from "firebase/firestore";

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
// const analytics = getAnalytics(app);

const firebaseAuth = getAuth();
firebaseAuth.languageCode = 'fr';


const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {

    console.log("additional data", additionalData);
    if (!userAuth) {
        return ;
    }

    // console.log("user auth:", userAuth);

    const userRef = doc(db, "users", userAuth.uid)

    // const userRef = doc(db, "users", "RXV88VDqntBsP89Bqb3o")


    // console.log("user ref",usersRef);
    const docSnap = await getDoc(userRef)

    console.log(">>>> data from doc snap...:", docSnap.data());

    if (!docSnap.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            } );
        } catch (e) {
            console.log("error creating user", e.message);
        }
    }
    // console.log(docSnap);
    return userRef;

}


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    "prompt": "select_account",
    'login_hint': 'user@example.com'
})

const googleAuth = () => signInWithPopup(firebaseAuth, provider);

export {googleAuth, firebaseAuth}