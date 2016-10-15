import React from "react";
import * as firebase from 'firebase';

// Firebase
    // const fbconfig = {
    //   apiKey: "AIzaSyBG6RABAtYE_59MiD9j2-L_Z4C5i3rJOZY",
    //   authDomain: "otl-react.firebaseapp.com",
    //   databaseURL: "https://otl-react.firebaseio.com",
    //   storageBucket: "otl-react.appspot.com",
    //   messagingSenderId: "531210504974"
    // };

    // const fireb = firebase
    //   .initializeApp(fbconfig)
    //   .database();

    // const fb = fireb
    //   .ref();
  


export default class FireBaseConfig extends React.Component {

  
  

  render() {
    const fbconfig = {
      apiKey: "AIzaSyBG6RABAtYE_59MiD9j2-L_Z4C5i3rJOZY",
      authDomain: "otl-react.firebaseapp.com",
      databaseURL: "https://otl-react.firebaseio.com",
      storageBucket: "otl-react.appspot.com",
      messagingSenderId: "531210504974"
    }
    return fbconfig
            
  }
    
}