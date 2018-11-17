import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import getTasks from '../../helpers/dataGetter';
import './auth.scss';
import checkLoginStatus from '../../helpers/authHelpers';

const shootTask = () => {
  const domString = `
  <button id="taskBut" class="btn btn-secondary mt-5">
  Console Log</button>`;
  $('#buttonForTask').html(domString);
  $('#taskBut').on('click', () => {
    getTasks()
      .then((data) => {
        displayTasks(data);
      }).catch((error) => {
        console.error(error);
      });
  });
};

const loginButton = () => {
  const domString = `
  <button id="google-auth" class="btn btn-secondary mt-5">
  LogIn</button>`;
  $('#auth').html(domString);
  $('#google-auth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    checkLoginStatus();
    shootTask();
  });
};

export default loginButton;
