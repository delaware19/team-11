import React from 'react';
import ***REMOVED*** connect ***REMOVED*** from 'react-redux';
import ***REMOVED*** Route, Redirect ***REMOVED*** from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = (***REMOVED***
  isAuthenticated,
  component: Component,
  ...rest
***REMOVED***) => (
    <Route ***REMOVED***...rest***REMOVED*** component=***REMOVED***(props) => (
      isAuthenticated ? (
        <div>
          <Header />
          <Component ***REMOVED***...props***REMOVED*** />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )***REMOVED*** />
  );

const mapStateToProps = (state) => (***REMOVED***
  isAuthenticated: !!state.auth.uid
***REMOVED***);

export default connect(mapStateToProps)(PrivateRoute);
