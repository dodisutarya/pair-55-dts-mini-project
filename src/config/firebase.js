import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dos-apps-auth.firebaseapp.com",
  projectId: "dos-apps-auth",
  storageBucket: "dos-apps-auth.appspot.com",
  messagingSenderId: "145779135092",
  appId: "1:145779135092:web:901d53e7a16829de6df721"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };