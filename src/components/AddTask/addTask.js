/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import $ from 'jquery';
import addNewAxios2 from '../../helpers/dataGetter';
import deleteTask2 from '../../helpers/dataGetter';
import printTaskSecond2 from '../Auth/auth';
// import domTasks2 from '../Auth/auth';

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

const addNewTask = () => {
  const newTask = taskFromForm2();
  addNewAxios2.addNewAxios(newTask)
    .then(() => {
      console.log('DataBase is updated?', newTask);
      printTaskSecond2.printTaskSecond();
      // domTasks2.domTasks();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const deleteTask = (idToDelete) => {
  deleteTask2.deleteTask(idToDelete)
    .then(() => {
      console.log('Delete button is wokring');
      printTaskSecond2.printTaskSecond();
      // domTasks2.domTasks();
    })
    .catch((error) => {
      console.error('error in deleting task', error);
    });
};

const newLocationFunction = () => {
  $('body').on('click', '#addButtons', () => { addNewTask(); });
  // $('body').on('click', '#task-del-but', () => { deleteTask(); });
  $('body').on('click', '#task-del-but', (e) => { const idNeeded = $(e.target).closest('.deleteThis'); const idNeeded2 = idNeeded[0].id; deleteTask(idNeeded2); });
};


export default { formForTask, newLocationFunction };
