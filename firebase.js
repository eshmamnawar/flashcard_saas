// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASOKCd7G2w4o1-1KredE1xjm_3zw80rU0",
  authDomain: "flashcardsaas-56060.firebaseapp.com",
  projectId: "flashcardsaas-56060",
  storageBucket: "flashcardsaas-56060.appspot.com",
  messagingSenderId: "9307741521",
  appId: "1:9307741521:web:6703ecaa8f58c9e4ce8770",
  measurementId: "G-HD49EP29GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);