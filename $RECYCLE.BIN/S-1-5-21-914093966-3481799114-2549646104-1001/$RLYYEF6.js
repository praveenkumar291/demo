import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Route path="/" component={App}></Route> */}
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" component={Register}></Route>
      </React.Fragment>
    );
  }
}
