
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJZnapI1hcq8Axqq-Eo9uV8E0njdGcBxg",
  authDomain: "accounts-mind.firebaseapp.com",
  projectId: "accounts-mind",
  storageBucket: "accounts-mind.appspot.com",
  messagingSenderId: "511726129054",
  appId: "1:511726129054:web:f75673b56a0abf4878108f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;