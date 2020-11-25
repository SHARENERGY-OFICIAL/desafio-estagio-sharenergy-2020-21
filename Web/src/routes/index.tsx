import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Clientes from "../pages/Clientes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/clientes" component={Clientes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
