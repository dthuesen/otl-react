import React from "react";
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import * as firebase from 'firebase';

// Logout timer Component
import TimoutLogout from './TimeoutLogout'


// Composing
import Header from "./Header"
import Footer from "./Footer";
import TopicsTable from "./TopicsTable";
import Content from "./Content";


export default class Layout extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log("Layout is loaded");
    var children = this.props.children;


    return (
      <div className="container-layout">
        <Header />

        <div >
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.any
};