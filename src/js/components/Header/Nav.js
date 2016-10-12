import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router'
import { IndexLink } from 'react-router'
import * as firebase from 'firebase';


// let user = firebase.auth().currentUser;
// let user = firebase.auth().user;
// let user = auth.currentUser;
// let user = firebase.auth();
// let user = Firebase.getAuth();

// console.log(Object.keys(user));
// console.log(Object.values(user));

// Object.getOwnPropertyNames(user).forEach(function(val, idx, array) {
//   console.log(val + ' -> ' + user[val]);
// });

// if(user) {
//   console.log(`From Nav - current user: `);
//   console.log(Object.keys(user));
// }

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    Object.getOwnPropertyNames(user).forEach(function(val, idx, array) {
      console.log(val + ' -> ' + user[val]);
    });
  }
});


export default class Nav extends React.Component {
  render() {
    return ( 
      <div className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <p className="navbar-text navbar-right">Nav componente</p>
            <ul className="nav navbar-nav" role="nav">
              <li className="btn btn-default"><IndexLink to="/" onlyActiveOnIndex={true}>Home</IndexLink ></li>
              <li className="btn btn-default"><Link to="/TopicsTable">TopicsTable</Link></li>
              
              <li className="btn btn-default"><Link to="/login">Login</Link></li>
              <li className="btn btn-default"><Link to="/about">About</Link></li>
            </ul>  
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
