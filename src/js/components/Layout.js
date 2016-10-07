import React from "react";


// Composing
import Header from "./Header"
import Footer from "./Footer";
import TopicsTable from "./TopicsTable";
import FileExchange from "./FileExchange";

export default class Layout extends React.Component {
  render() {
    console.log("Layout is loaded");
    return (
      <div className="container-layout">
        <Header />
        <h1>Layout component</h1>
        <TopicsTable />
        <FileExchange />
        <Footer />
      </div>
    );
  }
}