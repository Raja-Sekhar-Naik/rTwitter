// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxLHuUuXnx3NWqm6aoZjh4TmeF5Rhy-DU",
  authDomain: "twitter-20ce8.firebaseapp.com",
  projectId: "twitter-20ce8",
  storageBucket: "twitter-20ce8.appspot.com",
  messagingSenderId: "462379897116",
  appId: "1:462379897116:web:c93ebc8baa4b59b4d42ad9",
  measurementId: "G-QQGX38Z852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;