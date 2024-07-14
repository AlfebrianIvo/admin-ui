import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-a33a4.firebaseapp.com",
  projectId: "store-tutorial-a33a4",
  storageBucket: "store-tutorial-a33a4.appspot.com",
  messagingSenderId: "865074227590",
  appId: "1:865074227590:web:23e5d68a2f6490bfd12407"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
