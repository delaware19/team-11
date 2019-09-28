import React from 'react';
import ***REMOVED*** Router, Route, Switch, Link, NavLink ***REMOVED*** from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import userStory from '../components/DisplayStory';
import user_profile from '../components/User_Profile';

export const history = createHistory();


const AppRouter = () => (
  <Router history=***REMOVED***history***REMOVED***>
    <div>
      <Switch>
        <PublicRoute path="/" component=***REMOVED***LoginPage***REMOVED*** exact=***REMOVED***true***REMOVED*** />
        <PrivateRoute path="/dashboard" component=***REMOVED***DashboardPage***REMOVED*** />
        <PrivateRoute path="/user_profile" component=***REMOVED***user_profile***REMOVED*** />
        <PrivateRoute path="/socialstory" component=***REMOVED***userStory***REMOVED***/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
