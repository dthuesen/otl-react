import React from "react";
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Composing
import TopicsTable from "./TopicsTable";
import Content from "./Content";
import About from "./About";
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import Layout from "./Layout";
import Shortlist from "./Shortlist";
import * as firebase from 'firebase';


let userIsSignedIn = function () {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log('User is signed in: ' +  user)
    } else {
        // No user is signed in.
        var errorCode = 401;
        var errorMessage = "ENTER TOPICSTABLE USER MUST BE LOGGED IN!";
        browserHistory.push('/login')
        console.log("ERROR: " + errorMessage)
        console.log(errorCode)
        console.log(errorMessage)
    }
  });
}

let handleLoginLogout = function () {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log('User is signed in: ' +  user)
        browserHistory.push('/logout')
    } else {
        // No user is signed in.
        var errorCode = 401;
        var errorMessage = "USER NOT LOGGED IN!";
        browserHistory.push('/login')
        console.log("ERROR: " + errorMessage)
        console.log(errorCode)
        console.log(errorMessage)
    }
  });
}


export default class Routes extends React.Component {

  render() {  

    return (
        <Router history={browserHistory}>
          <Route path="/" component={Layout} >
            <IndexRoute component={ Home } />
            {/* Children of App */}
            <Route path="/topicstable" onEnter={userIsSignedIn} component={TopicsTable} />
            <Route path="/shortlist" onEnter={userIsSignedIn} component={Shortlist} />
            <Route path="/login" onEnter={handleLoginLogout} component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/about" component={About} />
          </Route>
        </Router>
    );
  }
}