// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDem4qmAklC6m5ODQgJREDPpozoLnCLa1A",
  authDomain: "newproject-edb9e.firebaseapp.com",
  projectId: "newproject-edb9e",
  storageBucket: "newproject-edb9e.firebasestorage.app",
  messagingSenderId: "1075972135170",
  appId: "1:1075972135170:web:1af67870dcf57656b78a1b",
  measurementId: "G-E47471VNE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth= getAuth(app)