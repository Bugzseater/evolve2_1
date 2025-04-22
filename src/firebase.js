// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyWNmtZE-qf2YFCE-WSrs5y4zm1SE_BTE",
    authDomain: "registrations-7d122.firebaseapp.com",
    projectId: "registrations-7d122",
    storageBucket: "registrations-7d122.firebasestorage.app",
    messagingSenderId: "330137906625",
    appId: "1:330137906625:web:142aa4388df7e2c92a9340"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
