import React from 'react';
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom';
import ***REMOVED*** connect ***REMOVED*** from 'react-redux';
import ***REMOVED*** startLogout ***REMOVED*** from '../actions/auth';

export const Header = (***REMOVED*** startLogout ***REMOVED***) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
    <Link className="header__title" to="DashBoard">
        
          <h4>DashBoard</h4>
        </Link>
         <Link className="header__title" to="/user_profile">
          <h4>User Profile</h4>
        </Link>
        <button className="button button--link" onClick=***REMOVED***startLogout***REMOVED***>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => (***REMOVED***
  startLogout: () => dispatch(startLogout())
***REMOVED***);

export default connect(undefined, mapDispatchToProps)(Header);
