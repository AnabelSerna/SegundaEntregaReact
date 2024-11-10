import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_TVfmtWc4hoaq9n5WgM2JrW0kmCYF1ds",
  authDomain: "entrega-final-react-7a1c1.firebaseapp.com",
  projectId: "entrega-final-react-7a1c1",
  storageBucket: "entrega-final-react-7a1c1.firebasestorage.app",
  messagingSenderId: "536661181977",
  appId: "1:536661181977:web:187759076de9a3e5538c88"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;



