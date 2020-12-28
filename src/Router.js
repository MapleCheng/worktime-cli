import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// custom components
import SetHostName from "./containers/SetHostName";
import Home from "./containers/Home";

// custom params
import { getHostName } from "./utils/HostName";

class Router extends Component {
  render() {
    if (getHostName() !== "") {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hostname" component={SetHostName} />
        </Switch>
      );
    } else {
      return <SetHostName />;
    }
  }
}
export default Router;
