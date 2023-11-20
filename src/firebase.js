// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2HcCXPpJ-poempi32Ta0Q9haIsrQUDbk",
  authDomain: "netflix-clone-5f40b.firebaseapp.com",
  projectId: "netflix-clone-5f40b",
  storageBucket: "netflix-clone-5f40b.appspot.com",
  messagingSenderId: "386025248980",
  appId: "1:386025248980:web:1112385ef844e7ed038341",
  measurementId: "G-861XL4KJEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);