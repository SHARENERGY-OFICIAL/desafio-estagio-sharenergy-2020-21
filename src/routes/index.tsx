import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Graphic from '../pages/Graphic';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/graphic" exact component={Graphic} />
  </Switch>
);

export default Routes;
