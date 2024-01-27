// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeWKAtY5tWOAkWl1USNlTTgPvVNA_9IwA",
  authDomain: "contact-app-60dda.firebaseapp.com",
  projectId: "contact-app-60dda",
  storageBucket: "contact-app-60dda.appspot.com",
  messagingSenderId: "52510580482",
  appId: "1:52510580482:web:83a1b13182c3ce22f22c1b",
  measurementId: "G-7NVNEWHQGG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
