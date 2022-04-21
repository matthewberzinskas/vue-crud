import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMLsCVKgnnAWXgqNk24jGvhLL1j-uyp-Q",
  authDomain: "vue-crud-28eee.firebaseapp.com",
  projectId: "vue-crud-28eee",
  storageBucket: "vue-crud-28eee.appspot.com",
  messagingSenderId: "534585553266",
  appId: "1:534585553266:web:2bbed406458bd9ba79edeb",
  measurementId: "G-MT53QGLFPB"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };