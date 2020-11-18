import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from './pages/LandingPage'

const App = () => {
    return (
        <Router >
            <Switch>
                <Route path='/' component={LandingPage}/>  
                <Redirect from='*' to='/' />    
            </Switch>
        </Router>
    );
};

export default App;
