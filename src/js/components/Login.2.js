import React from "react";
import { Link } from 'react-router';
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

let handleSubmit = function(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
    console.log('Sign in email: ')
    console.log(email)
}
let 

export default class Login extends React.Component {
    constructor(props) {
        super(props);    
        this.state = {value: 'Hello!'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(updatedValue) {
        email = this.setState.email.updatedValue
        password = this.setState.password.updatedValue
        console.log(email);
        console.log(password);
        handleSubmit(email, password);
    };
    
    render() {

        var onChange = this.handleChange

        return(
            <div>
                <h1>Die Login-Seite</h1>

                <input type="text" name="textFeld" value="Hello!" />
                <li>
                    <form className="form-group">
                    <input type="email" 
                        name="email" 
                        value={this.props.email}
                        placeholder="Enter your email for login..."
                        />
                    <input type="password" 
                        name="password" 
                        value={this.props.password}
                        placeholder="Enter password..." 
                        />
                    <button type="submit" onClick={this.props.onChange}>Go</button>
                    </form>
                </li>
                <button onClick={this.handleSignOut}>Sign out</button>
            
            </div>

        );
    }
}