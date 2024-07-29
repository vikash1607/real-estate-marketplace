// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHEabwLqmhNTIpN7PcSGj_stthxtPz2IQ",
  authDomain: "mern-real-estate-abc23.firebaseapp.com",
  projectId: "mern-real-estate-abc23",
  storageBucket: "mern-real-estate-abc23.appspot.com",
  messagingSenderId: "42896631290",
  appId: "1:42896631290:web:e4baddcc59ef0040e4f043"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);