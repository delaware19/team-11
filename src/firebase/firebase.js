import * as firebase from 'firebase';

const config = ***REMOVED***
  apiKey: "",
  authDomain: "react-project-b649a.firebaseapp.com",
  databaseURL: "https://react-project-b649a.firebaseio.com",
  projectId: "react-project-b649a",
  storageBucket: "react-project-b649a.appspot.com",
  messagingSenderId: "267595482614",
  appId: "1:267595482614:web:d0b6cf503131b875a473d7"
***REMOVED***;

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export ***REMOVED*** firebase, googleAuthProvider, database as default ***REMOVED***;
