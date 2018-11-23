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
    <div class="card mt-3" style="width: 18rem;">
    <div class="card-body">
        <p class="card-text">${data.task}</p>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Completed</label>
        </div>
    </div>
</div>
    `;
  });
  $('#taskPrint').append(domString);
};

const domTasks = () => {
  getTasks()
    .then((data) => {
      printTask(data);
    }).catch((error) => {
      console.error(error);
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
    // shootTask();
    domTasks();
  });
};

export default loginButton;
