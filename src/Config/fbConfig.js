import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2Rk5pMeVlPNe_J2h0_GpsKzk8RuXHE5s",
  authDomain: "first-4effe.firebaseapp.com",
  projectId: "first-4effe",
  storageBucket: "first-4effe.appspot.com",
  messagingSenderId: "665855783201",
  appId: "1:665855783201:web:ad31c8c90f4225486d4e60",
  measurementId: "G-PQWEKE21QJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
