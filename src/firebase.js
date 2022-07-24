// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkKPe6plgGjDkhZET_PJd3a6sNIRR0MrA",
  authDomain: "knicklab-e7859.firebaseapp.com",
  projectId: "knicklab-e7859",
  storageBucket: "knicklab-e7859.appspot.com",
  messagingSenderId: "434182385810",
  appId: "1:434182385810:web:f13323761c8a11b049764b",
  measurementId: "G-88M90DYJ23",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
