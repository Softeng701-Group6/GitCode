/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

let app;
let firebaseConfig;

try {
  firebaseConfig = require("./firebaseConfig").default;
} catch (error) {
  console.error("Failed to load Firebase configuration:", error);
  firebaseConfig = require("./firebaseConfig.example").default;
}

app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, firestore, googleProvider };
