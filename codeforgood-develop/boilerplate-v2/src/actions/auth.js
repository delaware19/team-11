import ***REMOVED*** firebase, googleAuthProvider ***REMOVED*** from '../firebase/firebase';

export const login = (uid) => (***REMOVED***
  type: 'LOGIN',
  uid
***REMOVED***);

export const startLogin = () => ***REMOVED***
  return () => ***REMOVED***
    return firebase.auth().signInWithPopup(googleAuthProvider);
  ***REMOVED***;
***REMOVED***;

export const logout = () => (***REMOVED***
  type: 'LOGOUT'
***REMOVED***);

export const startLogout = () => ***REMOVED***
  return () => ***REMOVED***
    return firebase.auth().signOut();
  ***REMOVED***;
***REMOVED***;
