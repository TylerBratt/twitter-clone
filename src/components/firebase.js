import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDjvxF_oWB_4xJ41x33I8WltWdO8ZMOXio",
  authDomain: "twitter-clone-f8d0d.firebaseapp.com",
  projectId: "twitter-clone-f8d0d",
  storageBucket: "twitter-clone-f8d0d.appspot.com",
  messagingSenderId: "379087348910",
  appId: "1:379087348910:web:a8e58a376ec9ad0a3ff93f",
  measurementId: "G-L39WHSNZSX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;