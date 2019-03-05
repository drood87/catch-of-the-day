import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC82lG3PAifIs0MBCsw3oWFYpEOC1D0RKw',
  authDomain: 'catch-of-the-day-dan-bernstein.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-dan-bernstein.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export

export default base;
