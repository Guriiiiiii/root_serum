// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCL-5Hf5mwecRdmQGD_zlAE6Xa_RApZtAc",
    authDomain: "spree-f9132.firebaseapp.com",
    projectId: "spree-f9132",
    storageBucket: "spree-f9132.firebasestorage.app",
    messagingSenderId: "881310520476",
    appId: "1:881310520476:web:518df50288cd431b4f0959",
    measurementId: "G-T4ZC2JNESY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);