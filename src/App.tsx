import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './app/login/Login';
import Dashboard from './app/dashboard/Dashboard';
import PageNotFound from './app/shared/pagenotfound/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />

          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />

          <Route component={PageNotFound} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
