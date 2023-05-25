import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, FirebaseApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.ts";

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };
