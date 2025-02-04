import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyANDzU03bXPWHl3PRwAuaPGD4Blmtwkh8A",
  authDomain: "authentication-a0557.firebaseapp.com",
  projectId: "authentication-a0557",
  storageBucket: "authentication-a0557.firebasestorage.app",
  messagingSenderId: "217064724396",
  appId: "1:217064724396:web:2d7b519ce95f9ef3eb4c09",
  measurementId: "G-J3ZHK8CEH6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
