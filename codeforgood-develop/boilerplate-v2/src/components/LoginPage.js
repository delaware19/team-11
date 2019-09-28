import React from 'react';
import ***REMOVED*** connect ***REMOVED*** from 'react-redux';
import ***REMOVED*** startLogin ***REMOVED*** from '../actions/auth';

export const LoginPage = (***REMOVED*** startLogin ***REMOVED***) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Nemours</h1>
      <p></p>
      <button className="button" onClick=***REMOVED***startLogin***REMOVED***> Hello, Please Login with your Gmail Account</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => (***REMOVED***
  startLogin: () => dispatch(startLogin())
***REMOVED***);

export default connect(undefined, mapDispatchToProps)(LoginPage);
