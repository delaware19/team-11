import React from 'react';
import ***REMOVED*** connect ***REMOVED*** from 'react-redux';
import ***REMOVED*** startLogin ***REMOVED*** from '../actions/auth';

export const LoginPage = (***REMOVED*** startLogin ***REMOVED***) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Boilerplate</h1>
      <p>Tag line for app.</p>
      <button className="button" onClick=***REMOVED***startLogin***REMOVED***>Login hello with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => (***REMOVED***
  startLogin: () => dispatch(startLogin())
***REMOVED***);

export default connect(undefined, mapDispatchToProps)(LoginPage);
