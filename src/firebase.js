import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCtuHR6DEr0KoS7O_is0MeVMdp64xdBLUo",
  authDomain: "vue-crud22.firebaseapp.com",
  projectId: "vue-crud22",
  storageBucket: "vue-crud22.appspot.com",
  messagingSenderId: "984840260668",
  appId: "1:984840260668:web:925d8c6b102587e2e30739",
  measurementId: "G-0XT1EK0K54"
};

firebase.initializeApp(config);
export default firebase.firestore();