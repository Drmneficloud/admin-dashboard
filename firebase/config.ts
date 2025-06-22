// firebase/config.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0bQZ1I49PLYFi1f1Or1VhUihypH9IyUo",
  authDomain: "admin-dashboard-1bd22.firebaseapp.com",
  projectId: "admin-dashboard-1bd22",
  storageBucket: "admin-dashboard-1bd22.firebasestorage.app",
  messagingSenderId: "701653631203",
  appId: "1:701653631203:web:ea5a4bb4be44e7338fc5d6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

