/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import $ from 'jquery';
import fromGetter from '../../helpers/dataGetter';
// import fromGetter from '../../helpers/dataGetter';
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

const formForTask2 = (task) => {
  const domString = `
  <div class="form-row2">
  <div class="form-group2">
    <label  for="form-task-id"></label>
    <input type="text" class="form-control" value="${task.id}" id="form-task-id" placeholder="Taskid">
    <label for="form-task-complete"></label>
    <input type="text" class="form-control" value="${task.isCompleted}" id="form-task-complete" placeholder="Task Complete true or false">
    <label for="form-task-name"></label>
    <input type="text" class="form-control" value="${task.task}" id="form-task-name" placeholder="Your Task">
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
  fromGetter.addNewAxios(newTask)
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
  fromGetter.deleteTask(idToDelete)
    .then(() => {
      console.log('Delete button is wokring');
      printTaskSecond2.printTaskSecond();
      // domTasks2.domTasks();
    })
    .catch((error) => {
      console.error('error in deleting task', error);
    });
};

// SHOW THE FORM

const editTask = (idToEdit) => {
  fromGetter.getSingleTask(idToEdit)
    .then((singleTask) => {
      let domString = '<h2>Edit Friend</h2>';
      domString += formForTask2(singleTask);
      domString += `<button id="save-edit-task" data-single-edit-id=${singleTask.id}>Save Friend</button>`;
      $('#add-edit-task').html(domString).show();
      $('.form-row').hide();
    })
    .catch((error) => {
      console.error('error in getting single for edit', error);
    });
};

// FUNC TO UPDATE
const updateTask = (taskId) => {
  const updatedTask = taskFromForm2();
  // const friendId = e.target.dataset.singleEditId;
  fromGetter.updateTask(updatedTask, taskId)
    .then(() => {
      $('#add-edit-task').html('').hide();
      // $('#single-container').html('');
      $('.form-row').show();
      printTaskSecond2.printTaskSecond();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const newLocationFunction = () => {
  $('body').on('click', '#addButtons', () => { addNewTask(); });
  // $('body').on('click', '#task-del-but', () => { deleteTask(); });
  $('body').on('click', '#task-del-but', (e) => { const idNeeded = $(e.target).closest('.deleteThis'); const idNeeded2 = idNeeded[0].id; deleteTask(idNeeded2); });
  $('body').on('click', '#edit-task-but', (e) => { const idNeeded = $(e.target).closest('.editThis'); const idNeeded2 = idNeeded[0].id; editTask(idNeeded2); });
  // $('body').on('click', '#save-edit-task', (e) => { const idNeeded = $(e.target).closest('.editThis'); const idNeeded2 = idNeeded[0].id; editTask(idNeeded2); });
  $('body').on('click', '#save-edit-task', () => { const idNeeded = $('#save-edit-task').data('single-edit-id'); updateTask(idNeeded); });
};

export default { formForTask, newLocationFunction };
