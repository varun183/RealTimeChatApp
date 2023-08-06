import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3CvHbgD3QRwlc9bbfttPrJOTYxQO9564",
  authDomain: "chatreal-3eee1.firebaseapp.com",
  projectId: "chatreal-3eee1",
  storageBucket: "chatreal-3eee1.appspot.com",
  messagingSenderId: "10436751487",
  appId: "1:10436751487:web:fc54f3658a6a87740b4f4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
