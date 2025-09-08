// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFd7hXxvL0uwej-Ng6k7BAxfbJyldAbgM",
  authDomain: "netflixgpt-e2344.firebaseapp.com",
  projectId: "netflixgpt-e2344",
  storageBucket: "netflixgpt-e2344.firebasestorage.app",
  messagingSenderId: "596378582641",
  appId: "1:596378582641:web:7602fd1e63531c6fefe5d0",
  measurementId: "G-9GKWX3FES7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();