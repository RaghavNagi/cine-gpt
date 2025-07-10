// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAOq_YUD2nOFFaj-38-Bn5g6gh8vqhJhQ",
  authDomain: "cinegpt-d9402.firebaseapp.com",
  projectId: "cinegpt-d9402",
  storageBucket: "cinegpt-d9402.firebasestorage.app",
  messagingSenderId: "984282785610",
  appId: "1:984282785610:web:d0928e0dd102e1be6883b3",
  measurementId: "G-NEX0X9T4F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();