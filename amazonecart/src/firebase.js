import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAxtTBqWcjYkR9h9GlW41TXLUBGDTTuiw4",
  authDomain: "ecart-90363.firebaseapp.com",
  databaseURL: "https://ecart-90363.firebaseio.com",
  projectId: "ecart-90363",
  storageBucket: "ecart-90363.appspot.com",
  messagingSenderId: "295555374275",
  appId: "1:295555374275:web:2523be962d725e22409676",
  measurementId: "G-B4V3YG1D8S"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth= firebase.auth();
export {db,auth};
