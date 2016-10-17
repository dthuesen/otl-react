import React from "react";
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'


export default class TimoutLogout extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log('Component TimeoutLogout is mounted.')
  }

  render() {

    function timeoutLogout() {
      let millisec = 60000 // 1 min = 60000
      var idlefunction = function () {
        // what to do when mouse is idle
        console.log("Logout after " + millisec / 10000 + " minutes")

        firebase.auth().signOut().then(function () {
          // Sign-out successful.
          console.log('User is signed out.')
          // browserHistory.push('/')
        }, function (error) {
          // An error happened.
          console.log('Error when signing out: ')
          console.log(error)
        });

      },
        idletimer,
        idlestart = function () {
          idletimer = setTimeout(idlefunction, millisec);
        },
        idlebreak = function () {
          clearTimeout(idletimer);
          idlestart();
        };
      if (window.addEventListener) {
        document.documentElement.addEventListener("mousemove", idlebreak, true);
        console.log("Logout is postponed for another " + millisec / 1000 / 60 + " minutes");
      }
      else {
        document.documentElement.attachEvent("onmousemove", idlebreak, true);
        console.log("Timer for timeout will be cleard");
      }

    };
    timeoutLogout();

    return (
      <div>
      </div>
    );
  }
}
