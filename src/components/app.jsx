import React, { Component } from "react";
import Header from "../container/header";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import TodoApp from "./todo-app";
import Ressources from "../container/ressources";
import RequireAuthentification from "../helpers/require-auth";
import Signin from "./signin"
import Signout from './signout'

require("../style.css");
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Ressources} />
          <Route
            exact
            path="/Ressources"
            component={RequireAuthentification(Ressources)}
          />
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/signout" component={Signout}/>
        </Switch>
      </div>
    );
  }
}
