// firebase.js
import firebase from 'firebase/app'
import 'firebase/database'

 // Web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC8CgaUnH_WbZwABYdMrdX7NNdv8i5y2io",
    authDomain: "pampas-grass-thinker-app.firebaseapp.com",
    databaseURL: "https://pampas-grass-thinker-app.firebaseio.com",
    projectId: "pampas-grass-thinker-app",
    storageBucket: "pampas-grass-thinker-app.appspot.com",
    messagingSenderId: "414192984550",
    appId: "1:414192984550:web:266f2e38e606fddff3b627"
  }
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase
