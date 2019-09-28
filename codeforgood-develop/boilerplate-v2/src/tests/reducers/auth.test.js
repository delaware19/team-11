import authReducer from '../../reducers/auth';

test('should set uid for login', () => ***REMOVED***
  const action = ***REMOVED***
    type: 'LOGIN',
    uid: 'abc123'
  ***REMOVED***;
  const state = authReducer(***REMOVED******REMOVED***, action);
  expect(state.uid).toBe(action.uid);
***REMOVED***);

test('should clear uid for logout', () => ***REMOVED***
  const action = ***REMOVED***
    type: 'LOGOUT'
  ***REMOVED***;
  const state = authReducer(***REMOVED*** uid: 'anything' ***REMOVED***, action);
  expect(state).toEqual(***REMOVED******REMOVED***);
***REMOVED***);
