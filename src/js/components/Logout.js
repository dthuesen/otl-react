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
        browserHistory.push('/')
        var errorMessage = "USER NOT LOGGED IN!";
        var errorCode = 401;
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

export default class Logout extends React.Component {
    constructor() {
        super();    
        this.state = {
            email: "",
            password: ""
        };
        
    }
    componentDidMount() {
        console.log('logout is mounted.')
    }

    onChange(key, value) {
        this.setState({ [key]: value })
    }

    render() {
        
        return(
            <div className="container" name={"logoutComp"}>
            
                <div className="row">
                    <div className="col- md-4 col-md-offset-2">
                        <h1>Log out from Open Topics List</h1>
                        <p>After sign out you will be redirected to the home page.</p>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-4">
                                <button className="btn btn-danger btn-block" onClick={handleSignOut}>Log Out</button>                        </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}