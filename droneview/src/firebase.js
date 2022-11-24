import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFXP8IfhtgO7oXQ_DLKK-vBuXnfcw2hUo",
    authDomain: "drone-monitoring-project-f6fab.firebaseapp.com",
    databaseURL: "https://drone-monitoring-project-f6fab-default-rtdb.firebaseio.com",
    projectId: "drone-monitoring-project-f6fab",
    storageBucket: "drone-monitoring-project-f6fab.appspot.com",
    messagingSenderId: "820887913270",
    appId: "1:820887913270:web:60b1a898e027c876ea6997"
  };
  
  // Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

