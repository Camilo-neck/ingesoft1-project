// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE-5eBFKSlzYjH-XtNvzMQYK3Sw1__d7w",
  authDomain: "corgisapp.firebaseapp.com",
  databaseURL: "https://corgisapp-default-rtdb.firebaseio.com",
  projectId: "corgisapp",
  storageBucket: "corgisapp.appspot.com",
  messagingSenderId: "433228436861",
  appId: "1:433228436861:web:f8161fc4e1763b53dbe814",
  measurementId: "G-NJ6978D6X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
