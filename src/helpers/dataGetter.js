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
        });
      }
      resolve(allTasksArray);
    })
    .catch((err) => {
      reject(err);
    });
});

// PULLS THE SINGLE TASK NEEDING EDITED
const getSingleTask = taskId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tasks/${taskId}.json`)
    .then((result) => {
      const singleTask = result.data;
      singleTask.id = taskId;
      resolve(singleTask);
    })
    .catch((error) => {
      reject(error);
    });
});


const addNewAxios = randomName => axios.post(`${baseUrl}/tasks.json`, JSON.stringify(randomName));

const deleteTask = taskId => axios.delete(`${baseUrl}/tasks/${taskId}.json`);

const updateTask = (friendsObject, taskId) => axios.put(`${baseUrl}/tasks/${taskId}.json`, JSON.stringify(friendsObject));


export default {
  getTasks,
  addNewAxios,
  deleteTask,
  updateTask,
  getSingleTask,
};
