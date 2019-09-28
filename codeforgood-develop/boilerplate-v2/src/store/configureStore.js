import ***REMOVED*** createStore, combineReducers, applyMiddleware, compose ***REMOVED*** from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => ***REMOVED***
  const store = createStore(
    combineReducers(***REMOVED***
      auth: authReducer
***REMOVED***),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
***REMOVED***;
