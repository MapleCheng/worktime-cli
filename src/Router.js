import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// custom components
import Home from "./containers/Home";
import Attendance from "./containers/Attendance";
import SetHostName from "./containers/SetHostName";
import ViewTime from "./containers/ViewTime";

// custom params
import { getHostName } from "./utils/HostName";

class Router extends Component {
  render() {
    if (getHostName() !== "") {
      return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/attendance/:student_no" component={Attendance} />
          <Route path="/viewtime/:attendance/:today/:nowtime" component={ViewTime} />
          <Route exact path="/hostname" component={SetHostName} />
        </Switch>
      );
    } else {
      return <SetHostName />;
    }
  }
}
export default Router;
