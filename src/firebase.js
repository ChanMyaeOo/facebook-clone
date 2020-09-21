import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAf3TyZedFTOSuVzpMfbX4SzWfrv_vm1EI",
    authDomain: "facebook-clone-d3008.firebaseapp.com",
    databaseURL: "https://facebook-clone-d3008.firebaseio.com",
    projectId: "facebook-clone-d3008",
    storageBucket: "facebook-clone-d3008.appspot.com",
    messagingSenderId: "685422234842",
    appId: "1:685422234842:web:4a9fadb12d3b345288a9e3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;