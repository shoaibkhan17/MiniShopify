import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDoDsFyMx1bfaWqOCy83xyt2EvkE2O46nM",
  authDomain: "minishopify-sysc4806.firebaseapp.com",
  databaseURL: "https://minishopify-sysc4806-default-rtdb.firebaseio.com",
  projectId: "minishopify-sysc4806",
  storageBucket: "minishopify-sysc4806.appspot.com",
  messagingSenderId: "283125325434",
  appId: "1:283125325434:web:a0bd08e9edcab20524a5c3",
  measurementId: "G-NTFEGXXLW6",
};

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
