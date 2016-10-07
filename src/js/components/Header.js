import React from "react";
import ReactDOM from "react-dom";

// Composing
import Brand from "./Header/Brand";
import Nav from "./Header/Nav";

export default class Header extends React.Component {
  render() {
    return ( 
      <div className="container">
        <span><Brand /></span><span>Header component</span><span><Nav /></span>       
      </div>
    );
  }
}
