import React from 'react';
import ReactDOM from 'react-dom';
import ***REMOVED*** Provider ***REMOVED*** from 'react-redux';
import AppRouter, ***REMOVED*** history ***REMOVED*** from './routers/AppRouter';
import configureStore from './store/configureStore';
import ***REMOVED*** login, logout ***REMOVED*** from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import ***REMOVED*** firebase ***REMOVED*** from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store=***REMOVED***store***REMOVED***>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => ***REMOVED***
  if (!hasRendered) ***REMOVED***
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  ***REMOVED***
***REMOVED***;

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => ***REMOVED***
  if (user) ***REMOVED***
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') ***REMOVED***
      history.push('/dashboard');
***REMOVED***
  ***REMOVED*** else ***REMOVED***
    store.dispatch(logout());
    renderApp();
    history.push('/');
  ***REMOVED***
***REMOVED***);
