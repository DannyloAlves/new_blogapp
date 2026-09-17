// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blogapp-nextjs13-2b89f.firebaseapp.com",
    projectId: "blogapp-nextjs13-2b89f",
    storageBucket: "blogapp-nextjs13-2b89f.appspot.com",
    messagingSenderId: "588524456531",
    appId: "1:588524456531:web:d0cda1f6faf167fd9014a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);