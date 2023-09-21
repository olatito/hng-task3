// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCR6neV-IX_XnVbs_YvSZQA1VjLC-FRIcI",
    authDomain: "dnd-gallery-d45e1.firebaseapp.com",
    projectId: "dnd-gallery-d45e1",
    storageBucket: "dnd-gallery-d45e1.appspot.com",
    messagingSenderId: "505615334028",
    appId: "1:505615334028:web:194cd2cef03688ef3f59a9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;