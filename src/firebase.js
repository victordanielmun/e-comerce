import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu6WD1sZkYnH_7bW_Uf-b_L5A7QOIESuk",
  authDomain: "realstate-8f052.firebaseapp.com",
  projectId: "realstate-8f052",
  storageBucket: "realstate-8f052.appspot.com",
  messagingSenderId: "853975454432",
  appId: "1:853975454432:web:c3f419eb06c762ec193685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();