import React, { Component } from "react";
import Header from "../container/header";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Ressources from "./ressources";
import RequireAuthentification from "../helpers/require-auth";

require("../style.css");
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Ressources"
            component={RequireAuthentification(Ressources)}
          />
        </Switch>
      </div>
    );
  }
}
