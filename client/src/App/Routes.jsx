import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import AuthenticatedRoute from 'Auth/AuthenticatedRoute';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      <Route path="/authenticate" component={Authenticate} />
      <AuthenticatedRoute path="/project" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
