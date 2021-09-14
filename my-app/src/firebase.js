// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCw3YFJvfdlHY3R91wazxWDN12KEdp2GGE",
  authDomain: "velaanmaiam.firebaseapp.com",
  projectId: "velaanmaiam",
  storageBucket: "velaanmaiam.appspot.com",
  messagingSenderId: "909362125520",
  appId: "1:909362125520:web:4fd208346a8fc46db41cd5",
  measurementId: "G-00NHH15ERY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
