<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = 
    apiKey  : "AIzaSyCmDKfwZ4RIeWdk4TEfjDkXiw4NUqM4zPE",
    authDomain: "login-test-8e63d.firebaseapp.com",
    projectId: "login-test-8e63d",
    storageBucket: "login-test-8e63d.appspot.com",
    messagingSenderId: "952364382742",
    appId: "1:952364382742:web:a2cc23806ecc1e1aa2d337",
    measurementId: "G-22ZVNYB3SX"
  ;

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
