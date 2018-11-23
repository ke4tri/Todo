import $ from 'jquery';

const formForTask = () => {
  const domString = `
  <form>
  <div class="form-row">
  <div class="form-group">
    <label  for="form-task-id"></label>
    <input type="text" class="form-control" id="form-task-id" placeholder="Taskid">
    <label for="form-task-complete"></label>
    <input type="text" class="form-control" id="form-task-complete" placeholder="Task Complete true or false">
    <label for="form-task-name"></label>
    <input type="text" class="form-control" id="form-task-name" placeholder="Your Task">
  </div>
  <button id="addBut2" class="btn btn-primary">Add Task</button>
</form>
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
  console.log(newTask);
};

$('#addBut2').on('click', addNewTask);
export default formForTask;
