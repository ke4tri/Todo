import axios from 'axios';

import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasks = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/tasks.json`)
    // .get('https://todo-d75a3.firebaseio.com/tasks.json')
    .then((result) => {
      const allTasksObject = result.data;
      const allTasksArray = [];
      if (allTasksObject != null) {
        Object.keys(allTasksObject).forEach((taskId) => {
          const newTask = allTasksObject[taskId];
          newTask.id = taskId;
          allTasksArray.push(newTask);
          console.log('DATA HERE');
        });
      }
      console.log('array?', allTasksArray);
      resolve(allTasksArray);
      console.log(result);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getTasks;
