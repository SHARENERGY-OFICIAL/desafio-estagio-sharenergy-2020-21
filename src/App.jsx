import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import SettingsPage from './pages/SettingsPage'

const App = () => {
    return (
        <Router >
            <Switch>
                <Route path="/" exact={true} component={LandingPage}/> 
                <Route path="/settings" component={SettingsPage} /> 
                <Redirect from='*' to='/' />    
            </Switch>
        </Router>
    );
};

export default App;
