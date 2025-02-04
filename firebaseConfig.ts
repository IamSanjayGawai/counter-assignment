import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDeE7qSq2xMQLOnoVhRjUrKDBTbfWFQTp0",
    authDomain: "counterapptask.firebaseapp.com",
    projectId: "counterapptask",
    storageBucket: "counterapptask.firebasestorage.app",
    messagingSenderId: "778793444800",
    appId: "1:778793444800:web:96edd0629ddcc1ed17d425"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

// Sign Out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};
