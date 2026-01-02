// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMIQzDchDgt4D6uuMDYFttj_DK2-QRBts",
  authDomain: "khanacademyalternate-hello.firebaseapp.com",
  projectId: "khanacademyalternate-hello",
  storageBucket: "khanacademyalternate-hello.firebasestorage.app",
  messagingSenderId: "778217484978",
  appId: "1:778217484978:web:5bfb85e7c21fab83998fab",
  measurementId: "G-QQ7TJP5KFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);