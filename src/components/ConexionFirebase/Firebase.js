import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyAGTPqZuhcLJBnPRtQ6MjKCrB_CHKZ6XGA",
    authDomain: "practicainterna-56833.firebaseapp.com",
    databaseURL: "https://practicainterna-56833.firebaseio.com",
    projectId: "practicainterna-56833",
    storageBucket: "practicainterna-56833.appspot.com",
    messagingSenderId: "145963684426",
    appId: "1:145963684426:web:337aa41f7fefeaf63a8cb3",
    measurementId: "G-QVMRGRH6GF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

 // db.settings({ timestampsInSnapshots: true });

  export default db;