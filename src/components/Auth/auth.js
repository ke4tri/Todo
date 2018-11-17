import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import getTasks from '../../helpers/dataGetter';
import './auth.scss';
import checkLoginStatus from '../../helpers/authHelpers';


const printTask = (dataArray) => {
  let domString = '';
  dataArray.forEach((data) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src=".../100px180/" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Task number ${data.id}</h5>
      <p class="card-text">Task : ${data.task}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    `;
  });
  $('#taskPrint').append(domString);
};


const shootTask = () => {
  const domString = `
  <button id="taskBut" class="btn btn-secondary mt-5">
  Console Log</button>`;
  $('#buttonForTask').html(domString);
  $('#taskBut').on('click', () => {
    getTasks()
      .then((data) => {
        printTask(data);
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
