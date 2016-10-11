import React from "react";
import ReactDOM from "react-dom";

// Composing
import Brand from "./Header/Brand";
import Nav from "./Header/Nav";

export default class Header extends React.Component {
  render() {
    return ( 
      <div>
        <Brand />
        <Nav />      
      </div>
    );
  }
}
