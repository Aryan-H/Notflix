// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3_YMxHNoJ2IQl5D4QcdNyKxITyw956LA",
  authDomain: "netflix-xlone-5410b.firebaseapp.com",
  projectId: "netflix-xlone-5410b",
  storageBucket: "netflix-xlone-5410b.appspot.com",
  messagingSenderId: "140683402626",
  appId: "1:140683402626:web:11cb1d5c66bc3ae4bb039b",
  measurementId: "G-3B3SPY98EF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);