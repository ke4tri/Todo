import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import getTasks2 from '../../helpers/dataGetter';
import './auth.scss';
import checkLoginStatus from '../../helpers/authHelpers';
import formForTask from '../AddTask/addTask';
// import bindEvents from '../AddTask/addTask';

const printTask = (dataArray) => {
  let domString2 = '';
  dataArray.forEach((data) => {
    domString2 += `
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
  $('#taskPrint').append(domString2);
  $('#addBut').html(formForTask());
  // the above prints the add form to dom
};


const domTasks = () => {
  getTasks2.getTasks()
    .then((data) => {
      printTask(data);
      $('body').on('click', '#addButtons', console.log('testtest'));
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
    // shootTask();
    domTasks();
  });
};

export default loginButton;
