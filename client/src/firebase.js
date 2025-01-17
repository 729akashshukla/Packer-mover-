// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-57f36.firebaseapp.com",
  projectId: "estate-57f36",
  storageBucket: "estate-57f36.firebasestorage.app",
  messagingSenderId: "155928261412",
  appId: "1:155928261412:web:7b92a57bc6d181ddfff9b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);