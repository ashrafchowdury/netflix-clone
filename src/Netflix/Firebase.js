import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBxKFzYUgVGI1mu9qsEY9uspZvH17YEZF8",
  authDomain: "netflix-clone-f500c.firebaseapp.com",
  projectId: "netflix-clone-f500c",
  storageBucket: "netflix-clone-f500c.appspot.com",
  messagingSenderId: "913519196226",
  appId: "1:913519196226:web:bbfefd196b5e9c8fb5d5db",
});

export const auth = app.auth(); //this is firebase predefined function
export default app;
