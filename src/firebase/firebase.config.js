// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZqYYNzooVKL2zVRTxchnOXNTNB3LAUj4",
  authDomain: "riverview-resort-firebase-auth.firebaseapp.com",
  projectId: "riverview-resort-firebase-auth",
  storageBucket: "riverview-resort-firebase-auth.appspot.com",
  messagingSenderId: "77789324379",
  appId: "1:77789324379:web:fc39da9e48f4355624cb7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;