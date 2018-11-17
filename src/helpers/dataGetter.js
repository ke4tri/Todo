import axios from 'axios';

// import apiKeys from '../../db/apiKeys.json';

// const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasks = () => new Promise((resolve, reject) => {
  axios
    // .get(`${baseUrl}`)
    .get('https://todo-d75a3.firebaseio.com/')
    .then((result) => {
      console.log('below is the data');
      console.log(result);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getTasks;
