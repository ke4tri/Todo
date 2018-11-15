import axios from 'axios';

import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasks = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}`)
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getTasks;
