// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQoHj2Nr9eeStyhauP58Fcr2JxeGrdxN8",
  authDomain: "miniblog-19ca9.firebaseapp.com",
  projectId: "miniblog-19ca9",
  storageBucket: "miniblog-19ca9.firebasestorage.app",
  messagingSenderId: "337597761725",
  appId: "1:337597761725:web:36ec34af167f2ce7ea8fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}