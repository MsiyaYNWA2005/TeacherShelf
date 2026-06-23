import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBVlbrx6MWWrz7MRIiivexubDBUDvfKsbE",
  authDomain: "todoapp-3026d.firebaseapp.com",
  projectId: "todoapp-3026d",
  storageBucket: "todoapp-3026d.firebasestorage.app",
  messagingSenderId: "942401549628",
  appId: "1:942401549628:web:a349aeec2e0623a2efda39",
  measurementId: "G-VLW0WPP1X4"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);