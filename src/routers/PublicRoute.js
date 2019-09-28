import React from 'react';
import ***REMOVED*** connect ***REMOVED*** from 'react-redux';
import ***REMOVED*** Route, Redirect ***REMOVED*** from 'react-router-dom';

export const PublicRoute = (***REMOVED***
  isAuthenticated,
  component: Component,
  ...rest
***REMOVED***) => (
    <Route ***REMOVED***...rest***REMOVED*** component=***REMOVED***(props) => (
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
          <Component ***REMOVED***...props***REMOVED*** />
        )
    )***REMOVED*** />
  );

const mapStateToProps = (state) => (***REMOVED***
  isAuthenticated: !!state.auth.uid
***REMOVED***);

export default connect(mapStateToProps)(PublicRoute);
