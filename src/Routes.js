import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import React from "react";
import Radar from "./Radar";
import Login from "./Login";
import AdminPage from "./AdminPage";
import ActionPlanPage from "./ActionPlanPage";
const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/about" component={HomePage} />
        <Route path="/radar" component={Radar} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/plan" component={ActionPlanPage} />

        <Route path="/login" component={Login} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
