import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

// custom components
import Router from "./Router";

import "./style.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Router />
      </HashRouter>
    );
  }
}

export default App;
