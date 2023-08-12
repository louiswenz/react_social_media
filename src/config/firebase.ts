// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbsazVFftKnxpPisDWxzEEu43WiGXm1DE",
  authDomain: "react-social-media-proje-f19ae.firebaseapp.com",
  projectId: "react-social-media-proje-f19ae",
  storageBucket: "react-social-media-proje-f19ae.appspot.com",
  messagingSenderId: "854997310338",
  appId: "1:854997310338:web:fdc14d6f7721e085328d9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
