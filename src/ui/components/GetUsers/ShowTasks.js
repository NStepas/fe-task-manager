import React, { useState } from 'react';

import Task from '../../pages/TodoList/Task/Task';
import ModalTaskInfo from './../../pages/TodoList/Task/AllTaskInfo/ModalTaskInfo';
import { Alert } from '@mui/material';
import { AlertTitle } from '@mui/material';

import './../../pages/TodoList/TodoList.scss';
import './Search.scss';

const ShowTasks = props => {
   const tasks = props;
   const [taskInfoShown, setTaskInfoShown] = useState(false);

   const showTaskInfoHandler = () => {
      setTaskInfoShown(true);
   };

   const hideTaskInfoHandler = () => {
      setTaskInfoShown(false);
      localStorage.removeItem('id');
   };
   return (
      <div>
         {!tasks.tasks.error ? (
            tasks.tasks?.payload?.map(
               ({ id, task_name, description, is_important, address, complete_date }) => (
                  <Task
                     key={id}
                     id={id}
                     name={task_name}
                     description={description}
                     importance={is_important}
                     address={address}
                     date={complete_date}
                     onClick={() => {
                        showTaskInfoHandler();
                        localStorage.setItem('id', id);
                     }}
                  />
               )
            )
         ) : (
            <Alert severity="error">
               <AlertTitle>Error</AlertTitle>
               <strong>Failed to get user tasks</strong>
            </Alert>
         )}
         {taskInfoShown ? (
            <>
               <ModalTaskInfo onClose={hideTaskInfoHandler} />
            </>
         ) : null}
      </div>
   );
};

export default ShowTasks;
