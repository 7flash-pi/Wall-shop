
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMAD3IB28nitn0HOt-FkHtpragVxA_2HE",
  authDomain: "walli-shop.firebaseapp.com",
  projectId: "walli-shop",
  storageBucket: "walli-shop.appspot.com",
  messagingSenderId: "607001129262",
  appId: "1:607001129262:web:8d2bba2579e4ec9e978abf",
  measurementId: "G-9L21BZEMRG"
};


const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

export default db;
