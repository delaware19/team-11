import ***REMOVED*** login, logout ***REMOVED*** from '../../actions/auth';

test('should generate login action object', () => ***REMOVED***
  const uid = 'abc123';
  const action = login(uid);
  expect(action).toEqual(***REMOVED***
    type: 'LOGIN',
    uid
  ***REMOVED***);
***REMOVED***);

test('should generate logout action object', () => ***REMOVED***
  const action = logout();
  expect(action).toEqual(***REMOVED***
    type: 'LOGOUT'
  ***REMOVED***);
***REMOVED***);
