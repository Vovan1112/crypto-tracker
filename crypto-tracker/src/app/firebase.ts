// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlr16IQvVCIw7MYBx7Z4vBhkJ6DH0iAKc",
  authDomain: "pet-project-d3753.firebaseapp.com",
  databaseURL: "https://pet-project-d3753-default-rtdb.firebaseio.com",
  projectId: "pet-project-d3753",
  storageBucket: "pet-project-d3753.appspot.com",
  messagingSenderId: "711941631144",
  appId: "1:711941631144:web:a5ae2f6136ea88c2e6a69d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth}