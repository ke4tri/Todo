// import $ from 'jquery';
// import friendsData from '../../helpers/dataGetter';

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
  <button id="addButton" class="btn btn-primary">Add Task</button>
  </div>
  </div>
  `;
  return domString;
};

// const taskFromForm2 = () => {
//   const taskFromForm = {
//     id: $('#form-task-id').val(),
//     isCompleted: $('#form-task-complete').val(),
//     task: $('#form-task-name').val(),
//   };
//   return taskFromForm;
// };

// const addNewTask = () => {
//   const newTask = taskFromForm2();
//   friendsData.addNewTask(newTask)
//     .then(() => {
//       console.log('DataBase is updated?');
//     })
//     .catch((error) => {
//       console.error('error', error);
//     });
// };

// const bindEvents = () => {
//   $('#addBut2').on('click', addNewTask());
//   $('#addBut').on(formForTask());
// };

// $('#addBut2').on('click', console.log('TESTTEST'));

// export default bindEvents;
export default formForTask;
