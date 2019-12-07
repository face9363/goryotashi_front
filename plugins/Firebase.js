import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCKAryaaVb9DRyowzcqc3kgyE4Qu0pBEtE",
  authDomain: "goyoutashi-32b27.firebaseapp.com",
  databaseURL: "https://goyoutashi-32b27.firebaseio.com",
  projectId: "goyoutashi-32b27",
  storageBucket: "goyoutashi-32b27.appspot.com",
  messagingSenderId: "1039358997151",
  appId: "1:1039358997151:web:34d3f3af8465a3faa4e8aa",
  measurementId: "G-HC5TGF4RX7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
