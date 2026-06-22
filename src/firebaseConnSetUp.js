
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfjWf3PCNXGUJYrSBIstK2ywWbRqMyxsM",
  authDomain: "teachershelf-5ec05.firebaseapp.com",
  projectId: "teachershelf-5ec05",
  storageBucket: "teachershelf-5ec05.firebasestorage.app",
  messagingSenderId: "695620269200",
  appId: "1:695620269200:web:c64b179f4deabff54d1415",
  measurementId: "G-R0YEX9D3WC"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);