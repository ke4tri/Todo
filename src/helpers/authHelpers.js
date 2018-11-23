import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#friends').hide();
      $('#tasks').show();
      $('#auth').hide();
      $('#navbar-button-auth').hide();
      $('#navbar-button-tasks').show();
      $('#navbar-button-friends').show();
      $('#navbar-button-logout').show();
      $('#addBut').show();
    } else {
      $('#friends').hide();
      $('#tasks').hide();
      $('#auth').show();
      $('#navbar-button-auth').show();
      $('#navbar-button-tasks').hide();
      $('#navbar-button-friends').hide();
      $('#navbar-button-logout').hide();
      $('#google-auth').hide();
      $('#addBut').hide();
    }
  });
};

export default checkLoginStatus;
