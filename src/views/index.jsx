import React, { Component } from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import { MapRouter, route } from "../router";
import './index.less'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <MapRouter route={route} />
        </Switch>
      </Router>
    );
  }
}

export default App;
