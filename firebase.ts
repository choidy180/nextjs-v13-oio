import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

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
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}