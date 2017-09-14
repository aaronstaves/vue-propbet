import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyBF_hbdCiNx3nPYhsreFHG1odn1ej4dn9g',
  authDomain: 'allburritos.firebaseapp.com',
  databaseURL: 'https://allburritos.firebaseio.com',
  projectId: 'allburritos',
  storageBucket: 'allburritos.appspot.com',
  messagingSenderId: '1067611718666',
};

firebase.initializeApp(config);
export const fb = firebase;
export const db = firebase.database();

export default fb;
