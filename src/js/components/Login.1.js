import React from "react";
import * as firebase from 'firebase';

let email = "";
let password = "";




firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('User is signed in with email: ' +  email)

  } else {
    // No user is signed in.
    console.log("ERROR: " + errorMessage)
    console.log(errorCode)
    console.log(errorMessage)
  }
});



var user = firebase.auth().currentUser;

let handleSignOut = function() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('User is signed out.')
    }, function(error) {
    // An error happened.
    console.log('Error when signing out: ')
    console.log(error)
    });
}

let handleSubmit = function() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
    console.log('Sign in email: ')
    console.log(this.email)
}


export default class Login extends React.Component {
    render() {
        return(
            <div>
            <h1>Die Login-Seite</h1>

            <li>
                <form>
                <input type="text" 
                       name="email" 
                       value={this.props.email}
                       placeholder="Enter your email for login..."
                       onChange={this.bindState('email')} 
                       />
                <input type="text" 
                       name="password" 
                       value={this.props.password}
                       placeholder="Enter password..." 
                       onChange={this.bindState('password')}
                       />
                <button type="submit" onClick={this.handleSubmit}>Go</button>
                </form>
            </li>
                <button onClick={this.handleSignOut}>Sign out</button>
            
            </div>

        );
    }
}