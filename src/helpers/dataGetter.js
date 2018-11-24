/* eslint-disable max-len */
import axios from 'axios';

import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasks = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/tasks.json`)
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

const addNewAxios = randomName => axios.post(`${baseUrl}/tasks.json`, JSON.stringify(randomName));

const deleteTask = taskId => axios.delete(`${baseUrl}/tasks/${taskId}.json`);

export default {
  getTasks,
  addNewAxios,
  deleteTask,
};
