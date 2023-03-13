// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjikdpdOFX2NYQ6AcFhO_01ob2kI_cRqs",
  authDomain: "mypf-e8a45.firebaseapp.com",
  projectId: "mypf-e8a45",
  storageBucket: "mypf-e8a45.appspot.com",
  messagingSenderId: "947109786398",
  appId: "1:947109786398:web:909a863222a72a815c0f0f",
  measurementId: "G-KYW81XR2HQ"
};

// Initialize Firebase
const firebaseClientApp = initializeApp(firebaseConfig)
export const firebaseClientAuth = getAuth(firebaseClientApp)
connectAuthEmulator(firebaseClientAuth, 'http://localhost:3000')