import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARcYtTMo_JjH6CnkJR3-3VI84Vb-SvXhU",
    authDomain: "whats-app-clone-6c0e2.firebaseapp.com",
    databaseURL: "https://whats-app-clone-6c0e2.firebaseio.com",
    projectId: "whats-app-clone-6c0e2",
    storageBucket: "whats-app-clone-6c0e2.appspot.com",
    messagingSenderId: "575095354849",
    appId: "1:575095354849:web:d703162f7a9c997fb64ea0",
    measurementId: "G-6S67KXQB4L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;