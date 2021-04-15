import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBwqOx2HzlBAw3U1fkFPOC1ou_EFTGLQzI",
    authDomain: "todo-list-6ddfa.firebaseapp.com",
    projectId: "todo-list-6ddfa",
    storageBucket: "todo-list-6ddfa.appspot.com",
    messagingSenderId: "992469740625",
    appId: "1:992469740625:web:3a13ac0a08698f4ead9c70"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export  {db};