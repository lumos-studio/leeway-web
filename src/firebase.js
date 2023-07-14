import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBhzSlAhXv1CnCnyMVzTNQCIvyg6Jrr8aM",
  authDomain: "leeway-staging-f2db3.firebaseapp.com",
  projectId: "leeway-staging-f2db3",
  storageBucket: "leeway-staging-f2db3.appspot.com",
  messagingSenderId: "336011377473",
  appId: "1:336011377473:web:90af19959b9b3e5b4c7fc0"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
export default firebase;