import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./services/PrivateRoute";
import Landing from "./pages/landing/Landing";
import Medications from "./pages/medications/Medications";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <PrivateRoute path="/drugs" exact component={Medications} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
