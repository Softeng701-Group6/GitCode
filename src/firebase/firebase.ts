// eslint-disable-next-line
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, FirebaseApp } from "firebase/app";
import firebaseConfigTemplate from './firebaseConfig.example';

let app: FirebaseApp;
let auth;
let firestore;
let googleProvider;

(async () => {
  let firebaseConfig;

  try {
    const configModule = await import('./firebaseConfig');
    firebaseConfig = configModule.default;
  } catch (err) {
    console.log("Using template config");
    firebaseConfig = firebaseConfigTemplate;
  }

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  firestore = getFirestore(app);
  googleProvider = new GoogleAuthProvider();
})();

export { auth, firestore, googleProvider };
