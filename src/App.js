import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

// custom components
import Router from "./Router";

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
