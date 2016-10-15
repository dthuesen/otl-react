import * as firebase from 'firebase';

// Firebase
const fbconfig = {
  apiKey: "AIzaSyBG6RABAtYE_59MiD9j2-L_Z4C5i3rJOZY",
  authDomain: "otl-react.firebaseapp.com",
  databaseURL: "https://otl-react.firebaseio.com",
  storageBucket: "otl-react.appspot.com",
  messagingSenderId: "531210504974"
};

export const fireb = firebase
  .initializeApp(fbconfig)
  .database();

export const fb = fireb.ref();