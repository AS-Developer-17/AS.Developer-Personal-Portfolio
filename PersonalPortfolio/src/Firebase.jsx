// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArY8XDnmoN4o0h5mKMnHR9Jp66dlokIv4",
  authDomain: "as-developerportfolio.firebaseapp.com",
  projectId: "as-developerportfolio",
  storageBucket: "as-developerportfolio.firebasestorage.app",
  messagingSenderId: "592859432044",
  appId: "1:592859432044:web:c64ca0b62b58368f154449",
  measurementId: "G-6DMMC4CZKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };