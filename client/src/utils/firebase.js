// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuFJrdOS80UGbN0PZvCNdy6EcNSu8GuXY",
  authDomain: "hospital-cb6c8.firebaseapp.com",
  databaseURL: "https://hospital-cb6c8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hospital-cb6c8",
  storageBucket: "hospital-cb6c8.appspot.com",
  messagingSenderId: "414174807700",
  appId: "1:414174807700:web:d4b1b1b06bb97721a89681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);