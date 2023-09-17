// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
import { browserLocalPersistence, getAuth, GoogleAuthProvider, setPersistence } from "firebase/auth"
import "firebase/storage"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5WFVjiTF-CVmspM1eIpDhcy3_tqnMa2g",
  authDomain: "invictus-026.firebaseapp.com",
  projectId: "invictus-026",
  storageBucket: "invictus-026.appspot.com",
  messagingSenderId: "562975682368",
  appId: "1:562975682368:web:a4b5a31b85c7743f0814a5",
  measurementId: "G-HYBKCZF0TX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storageRef = getStorage(app)

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set successfully.");
  })
  .catch((error) => {
    console.error("Error setting session persistence:", error);
  });