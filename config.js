import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyCkwIPMKlPEhPivWUaKRfsNgU9xkkLHor0",
  authDomain: "storytelling-app-75f25.firebaseapp.com",
  projectId: "storytelling-app-75f25",
  storageBucket: "storytelling-app-75f25.appspot.com",
  messagingSenderId: "22965238701",
  appId: "1:22965238701:web:5f62831c09458fcc47ff24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);