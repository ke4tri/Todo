import createTaskCard from '../TaskCard/taskCard';

import './taskList.scss';

const createTaskList = (tasks) => {
  let domString = '<ul class="player-list">';
  tasks.forEach((task) => {
    domString += createTaskCard(task);
  });
  domString += '</ul>';
  return domString;
};

export default createTaskList;
