// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUoNKuaGOGtnKYnpBBwCrB3r2y0b42zMs",
    authDomain: "netflixgpt-66f5e.firebaseapp.com",
    projectId: "netflixgpt-66f5e",
    storageBucket: "netflixgpt-66f5e.appspot.com",
    messagingSenderId: "178915622009",
    appId: "1:178915622009:web:5d07ec72dcadd7928728a8",
    measurementId: "G-ZM18GXPE4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();