// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfzL5ajAht9VGuqZ3-mRUXkeaSNAiD80Q",
  authDomain: "book-haven-4dcce.firebaseapp.com",
  projectId: "book-haven-4dcce",
  storageBucket: "book-haven-4dcce.firebasestorage.app",
  messagingSenderId: "965244890139",
  appId: "1:965244890139:web:b1a33ac8a41f30923d9cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);