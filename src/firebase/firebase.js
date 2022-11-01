import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8tfM0WzKx2Yrbwmgn5CzC8YVLLmxbEM4",
  authDomain: "hoopshoes-b232c.firebaseapp.com",
  projectId: "hoopshoes-b232c",
  storageBucket: "hoopshoes-b232c.appspot.com",
  messagingSenderId: "320974058736",
  appId: "1:320974058736:web:9a6647f275d2bf47613e35",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
