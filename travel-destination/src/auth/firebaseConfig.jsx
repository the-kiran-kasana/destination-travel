import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

 const firebaseConfig = {
  apiKey: "AIzaSyBMlnHfvPbtFObGGaOkNAdnnarhhIaNhAE",
  authDomain: "destination-finder-86628.firebaseapp.com",
  databaseURL: "https://destination-finder-86628-default-rtdb.firebaseio.com",
  projectId: "destination-finder-86628",
  storageBucket: "destination-finder-86628.firebasestorage.app",
  messagingSenderId: "135119622794",
  appId: "1:135119622794:web:1c8976ab8eacb158849373",
  measurementId: "G-GMRHSMHT7N"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);