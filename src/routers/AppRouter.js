import React from 'react';
import ***REMOVED*** Router, Route, Switch, Link, NavLink ***REMOVED*** from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history=***REMOVED***history***REMOVED***>
    <div>
      <Switch>
        <PublicRoute path="/" component=***REMOVED***LoginPage***REMOVED*** exact=***REMOVED***true***REMOVED*** />
        <PrivateRoute path="/dashboard" component=***REMOVED***DashboardPage***REMOVED*** />
        <Route component=***REMOVED***NotFoundPage***REMOVED*** />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
