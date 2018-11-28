import React from "react";
import { Route, Router as ReactRouter, Switch } from "react-router-dom";
import { history } from "../../history";
import LoginForm from "../LoginForm";
import NotFound from "../NotFound";
import Tasks from "../Tasks";

const Router = () => (
  <ReactRouter history={history}>
    <Switch>
      <Route exact path="/" component={Tasks} />
      <Route path="/login" component={LoginForm} />
      <Route exact path="/tasks" component={Tasks} />
      <Route component={NotFound} />
    </Switch>
  </ReactRouter>
);

export default Router;
