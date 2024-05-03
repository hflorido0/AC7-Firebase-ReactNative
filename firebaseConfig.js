import { initializeApp } from 'firebase/app';

// Imports opcionales para otras opciones de firebase
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB8IG1J-PTjs3s5Bc9xTTL4V5s0ZehuYrE",
    authDomain: "ac7-firebase-reactnative.firebaseapp.com",
    projectId: "ac7-firebase-reactnative",
    storageBucket: "ac7-firebase-reactnative.appspot.com",
    messagingSenderId: "4788826254",
    appId: "1:4788826254:web:1a3098f05b0579b19f99df",
    measurementId: "G-M799C2KFD1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// más info: https://firebase.google.com/docs/web/setup#access-firebase