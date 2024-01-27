import React, { useState } from 'react';

import Task from './../../pages/TodoList/Task/Task';
import ModalTaskInfo from './../../pages/TodoList/Task/AllTaskInfo/ModalTaskInfo';

import './../../pages/TodoList/Task/Task.scss';

function SearchList({ filteredTasks }) {
   const [taskInfoShown, setTaskInfoShown] = useState(false);
   const showTaskInfoHandler = () => {
      setTaskInfoShown(true);
   };

   const hideTaskInfoHandler = () => {
      setTaskInfoShown(false);
   };
   const filtered = filteredTasks?.map(
      ({ id, task_name, description, is_important, address, complete_date }) => (
         <Task
            key={id}
            id={id}
            name={task_name}
            description={description}
            importance={is_important}
            address={address}
            date={complete_date}
            onClick={showTaskInfoHandler}
         />
      )
   );

   return (
      <div>
         {filtered}
         {taskInfoShown ? <ModalTaskInfo onClose={hideTaskInfoHandler} /> : null}
      </div>
   );
}

export default SearchList;
