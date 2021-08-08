import firebase from 'firebase/app'
import "firebase/auth";

const app = firebase.initializeApp( {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth(); //this is firebase predefined function
export default app;




// apiKey: "AIzaSyBxKFzYUgVGI1mu9qsEY9uspZvH17YEZF8",
// authDomain: "netflix-clone-f500c.firebaseapp.com",
// projectId: "netflix-clone-f500c",
// storageBucket: "netflix-clone-f500c.appspot.com",
// messagingSenderId: "913519196226",
// appId: "1:913519196226:web:bbfefd196b5e9c8fb5d5db"