import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHwbdhO52Vt6aQ7CflhRoh13PorW7Sfa0",
    authDomain: "smart-tutor-5dbe1.firebaseapp.com",
    projectId: "smart-tutor-5dbe1",
    storageBucket: "smart-tutor-5dbe1.firebasestorage.app",
    messagingSenderId: "161513714945",
    appId: "1:161513714945:web:bd9281357ff70b2eb31700",
    measurementId: "G-11WGJKEBM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();






