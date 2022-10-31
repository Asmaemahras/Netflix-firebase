// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2QNeqRGPIqQUFGQ3H-kOJmFf3kDGbRS4",
  authDomain: "netflix-react-105ab.firebaseapp.com",
  projectId: "netflix-react-105ab",
  storageBucket: "netflix-react-105ab.appspot.com",
  messagingSenderId: "368182575225",
  appId: "1:368182575225:web:70dbf68c819ffebac114a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);