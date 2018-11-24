import firebase from 'firebase/app';
import 'bootstrap';
import './index.scss';
import createNavbar from './components/Navbar/navbar';
import apiKeys from '../db/apiKeys.json';
import loginButton2 from './components/Auth/auth';
// import getTasks from './helpers/dataGetter';
// import getTasks from './helpers/dataGetter';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginButton2.loginButton();
};

initializeApp();
