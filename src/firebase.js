// Import the functions you need from the SDKs you need
// Firebase core
import { initializeApp } from "firebase/app";

// Auth
import { getAuth } from "firebase/auth";

// Firestore
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBD7vtJi4wAJcJXNbsVrYLIrtzL0DoeWmw",
//   authDomain: "agrotrade-5f1cc.firebaseapp.com",
//   projectId: "agrotrade-5f1cc",
//   storageBucket: "agrotrade-5f1cc.firebasestorage.app",
//   messagingSenderId: "592935614583",
//   appId: "1:592935614583:web:0032677790b49882d6ae72",
//   measurementId: "G-41S9E1M4EH"
// };


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
// Initialize app
const app = initializeApp(firebaseConfig);

// ✅ EXPORT BOTH
export const auth = getAuth(app);
export const db = getFirestore(app);