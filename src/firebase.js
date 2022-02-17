// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-xl66Z6qpJf3sM8OiiSCb-Piuq-E02Zo",
  authDomain: "react-auth-2d0e6.firebaseapp.com",
  projectId: "react-auth-2d0e6",
  storageBucket: "react-auth-2d0e6.appspot.com",
  messagingSenderId: "528882544143",
  appId: "1:528882544143:web:93fbf92a4e1a3645b0fd7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)