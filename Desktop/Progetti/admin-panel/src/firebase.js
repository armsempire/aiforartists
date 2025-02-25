import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyChs8oVt8ta1uJ1e2qtdytsMdF2jUVaVuI",
  authDomain: "arms-empire.firebaseapp.com",
  projectId: "arms-empire",
  storageBucket: "arms-empire.appspot.com",
  messagingSenderId: "898954668642",
  appId: "1:898954668642:web:49102886fe5ee234183f3b",
  measurementId: "G-W6F335HJ9Y"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
