import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// custom components
import SetHostName from "./containers/SetHostName";

// custom params
import { getHostName } from "./utils/HostName";

class Router extends Component {
  render() {
    if (getHostName() !== "") {
      return <Switch></Switch>;
    } else {
      return <SetHostName />;
    }
  }
}
export default Router;
