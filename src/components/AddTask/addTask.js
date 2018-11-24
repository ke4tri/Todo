/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import $ from 'jquery';
// import axios from 'axios';
// import apiKeys from '../../../db/apiKeys.json';
// import friendsData from '../../helpers/dataGetter';
// import { resolve } from 'dns';
import addNewAxios2 from '../../helpers/dataGetter';
import domTasks2 from '../Auth/auth';

// const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const formForTask = () => {
  const domString = `
  <div class="form-row">
  <div class="form-group">
    <label  for="form-task-id"></label>
    <input type="text" class="form-control" id="form-task-id" placeholder="Taskid">
    <label for="form-task-complete"></label>
    <input type="text" class="form-control" id="form-task-complete" placeholder="Task Complete true or false">
    <label for="form-task-name"></label>
    <input type="text" class="form-control" id="form-task-name" placeholder="Your Task">
  <button id="addButtons" class="btn btn-primary">Add Task</button>
  </div>
  </div>
  `;
  return domString;
};

const taskFromForm2 = () => {
  const taskFromForm = {
    id: $('#form-task-id').val(),
    isCompleted: $('#form-task-complete').val(),
    task: $('#form-task-name').val(),
  };
  return taskFromForm;
};

// const addNewAxios = friendsObject => axios.post(`${firebaseUrl}/tasks.json`, JSON.stringify(friendsObject));


const addNewTask = () => {
  const newTask = taskFromForm2();
  addNewAxios2.addNewAxios(newTask)
    .then(() => {
      console.log('DataBase is updated?', newTask);
      domTasks2.domTasks();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const newLocationFunction = () => {
  $('body').on('click', '#addButtons', () => { addNewTask(); });
};

// export default bindEvents;
export default { formForTask, newLocationFunction };
