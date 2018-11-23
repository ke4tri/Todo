import $ from 'jquery';

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
