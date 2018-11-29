/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import getTasks2 from '../../helpers/dataGetter';
import './auth.scss';
import checkLoginStatus from '../../helpers/authHelpers';
import formForTask2 from '../AddTask/addTask';
import newLocationFunction2 from '../AddTask/addTask';

const printTask = (dataArray) => {
  let domString2 = '';
  dataArray.forEach((data) => {
    domString2 += `
    <div id="${data.id}"class="card mt-3 deleteThis editThis" style="width: 18rem;">
    <div class="card-body">
        <p class="card-text">${data.task}</p>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Completed</label>
            <button id="task-del-but"type="button" class="btn btn-danger">X</button>
            <button id ="edit-task-but" type="button" class="btn">EDIT</button>
            </div>
    </div>
</div>
    `;
  });
  $('#taskPrint').html(domString2);
  $('#addBut').html(formForTask2.formForTask());
  // the above prints the add form to dom
};

const printTaskSecond = () => {
  getTasks2.getTasks()
    .then((data) => {
      printTask(data);
    })
    .catch((error) => {
      console.error('error in getting one friend', error);
    });
};

const domTasks = () => {
  getTasks2.getTasks()
    .then((data) => {
      printTask(data);
      newLocationFunction2.newLocationFunction();
    })
    .catch((error) => {
      console.error('error in getting one friend', error);
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
    domTasks();
  });
};

export default { loginButton, domTasks, printTaskSecond };
