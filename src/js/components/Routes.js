import React from "react";
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// Composing

import TopicsTable from "./TopicsTable";
import Content from "./Content";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Layout from "./Layout";



export default class Routes extends React.Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Layout} >
              <IndexRoute component={ Home }/>
              {/* Children of App */}
                <Route path="/topicstable" component={TopicsTable} />
                <Route path="/login" component={Login}>
                <Route path="/about" component={About}/>
              </Route>
          </Route>
        </Router>
    );
  }
}