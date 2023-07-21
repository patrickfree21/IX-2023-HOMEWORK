// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSdVD4oo5sAfqXMkrKUkibFQdzwjXMwWo",
  authDomain: "tasklistfirebase-d35fd.firebaseapp.com",
  projectId: "tasklistfirebase-d35fd",
  storageBucket: "tasklistfirebase-d35fd.appspot.com",
  messagingSenderId: "237780250037",
  appId: "1:237780250037:web:89023f172c857c604cbdfc",
  measurementId: "G-5E38L8F6XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };