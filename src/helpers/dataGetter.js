/* eslint-disable max-len */
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

const addNewTask = taskFromForm2 => axios.post(`${baseUrl}/friends.json`, JSON.stringify(taskFromForm2));

// this is whats used to actually push the string to firebase database
// const addNewTask = allTasksObject => axios.post(`${baseUrl}/friends.json`, JSON.stringify(allTasksObject));

// export default getTasks;
export default {
  getTasks,
  addNewTask,
};
