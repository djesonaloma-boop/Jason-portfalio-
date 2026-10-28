import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyA24pBo8mBWiZssPtep--MMBdB7c8_Lu4U",
  authDomain: "starlink-investit.firebaseapp.com",
  databaseURL: "https://starlink-investit-default-rtdb.firebaseio.com",
  projectId: "starlink-investit",
  storageBucket: "starlink-investit.firebasestorage.app",
  messagingSenderId: "807081599583",
  appId: "1:807081599583:web:e00ec3959bc4acdae031ea"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
