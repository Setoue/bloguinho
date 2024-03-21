import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOB7EmyprYU5Fw4zIqd40ePuEV2aFUnQc",
  authDomain: "bloguinho-bfbda.firebaseapp.com",
  projectId: "bloguinho-bfbda",
  storageBucket: "bloguinho-bfbda.appspot.com",
  messagingSenderId: "69749192614",
  appId: "1:69749192614:web:e457d681fff34bcabe8167",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
