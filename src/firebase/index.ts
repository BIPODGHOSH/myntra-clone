// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQmCtRPEGq3lNhZ-hj7pQB-xtFm3__s-U",
  authDomain: "myntra-clone-9136a.firebaseapp.com",
  projectId: "myntra-clone-9136a",
  storageBucket: "myntra-clone-9136a.appspot.com",
  messagingSenderId: "797867104141",
  appId: "1:797867104141:web:e6fdb5cf2040e2473a0fc4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
