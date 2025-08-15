// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBKDF5yESjYOg9H1GpJs2yZK6qSAGM9Kns",

  authDomain: "college-attendence-c3f2f.firebaseapp.com",

  projectId: "college-attendence-c3f2f",

  storageBucket: "college-attendence-c3f2f.firebasestorage.app",

  messagingSenderId: "66273533706",

  appId: "1:66273533706:web:46b19a20de5082836964f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
