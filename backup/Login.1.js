import React from "react";
import { Link } from 'react-router';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router'

let userIsSignedIn = function() {
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log('User is signed in: ' +  user)
        browserHistory.push('/topicstable')
    } else {
        // No user is signed in.
        console.log("ERROR: " + errorMessage)
        console.log(errorCode)
        console.log(errorMessage)
    }
    });
}

let handleSignOut = function() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('User is signed out.')
    // window.location = '/';
    browserHistory.push('/')
    }, function(error) {
    // An error happened.
    console.log('Error when signing out: ')
    console.log(error)
    });
}

let handleLogin = function(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    });
    userIsSignedIn();
    console.log('Sign in email: ')
    console.log(email)
} 

export default class Login extends React.Component {
    constructor() {
        super();    
        this.state = {
            email: "",
            password: ""
        };
        
    }

    onChange(key, value) {
        this.setState({ [key]: value })
    }

    onSubmit(event) {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log(`You logged in with email=${email}`);
        handleLogin(email, password);
        checkUserLoginStatus();
    }

    handleChange(updatedValue) {
        email = this.setState.email.updatedValue
        password = this.setState.password.updatedValue
        console.log(email);
        console.log(password);
        handleSubmit(email, password);
    };
    
    render() {
        const onEmailChange = ev => this.onChange('email', ev.target.value);
        const onPasswordChange = ev => this.onChange('password', ev.target.value);

        return(
            <div className="container">
                <div className="row">
                    <form className="form-horizontal" onSubmit={ev => this.onSubmit(ev)}>
                        
                        <div className="form-group" >
                            <label htmlFor="inputEmail1" className="col-md-2 control-label" >Email:</label>
                            <div className="col-md-4">
                                <input name="email" type="email" className="form-control" id="inputEmail1" placeholder="Please enter your email" value={this.state.username} onChange={onEmailChange} />
                            </div >
                        </div >

                        <div className="form-group" >
                            <label htmlFor="inputPassword1" className="col-md-2 control-label" >Password:</label>
                            <div className="col-md-4">
                                <input name="password" type="password" className="form-control" id="inputPassword1" placeholder="Please enter password" value={this.state.password} onChange={onPasswordChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-4">
                                <button type="submit" className="btn btn-primary btn-block">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="row">
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-4">
                                <button className="btn btn-link btn-block" onClick={handleSignOut}>Log Out</button>                        </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}