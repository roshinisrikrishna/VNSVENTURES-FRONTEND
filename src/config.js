import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZCv4NZbuB8wT5lYRQEYk9NrMk72DFkrM",
  authDomain: "vnsventures-7fa24.firebaseapp.com",
  projectId: "vnsventures-7fa24",
  storageBucket: "vnsventures-7fa24.appspot.com",
  messagingSenderId: "499545731882",
  appId: "1:499545731882:web:c104fd6e65b770a7ff6453",
  measurementId: "G-HBL9NR18Z7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
export { auth, provider, storage, db};