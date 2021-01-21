import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA0U2ADLuYld5Qx29Qm3T99YqeDpWZ_-jU',
  authDomain: 'linkedin-clone-2208.firebaseapp.com',
  projectId: 'linkedin-clone-2208',
  storageBucket: 'linkedin-clone-2208.appspot.com',
  messagingSenderId: '824552250511',
  appId: '1:824552250511:web:168acc9325d7b8d8cbe4fa'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
