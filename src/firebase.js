import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3gzbfE8ee6X4AYGAqUKhJG8AJe7uy6EA",
  authDomain: "tolex-todo.firebaseapp.com",
  projectId: "tolex-todo",
  storageBucket: "tolex-todo.appspot.com",
  messagingSenderId: "729862401684",
  appId: "1:729862401684:web:7dded499efa2c2b9118e81"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
