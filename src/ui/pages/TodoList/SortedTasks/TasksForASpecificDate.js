import { useRef, useEffect, useState, forceUpdate } from 'react';

import SortedTasksContainer from '../SortedTasksContainer';
import { ThunkGetUserTasksForASpecificDate } from '../../../../store/tasks/thunks/ThunkTasks';

const TasksForASpecificDate = () => {
   const dateValue = useRef('');
   const [date, setDate] = useState('');

   const onChange = async () => {
      localStorage.setItem('date', dateValue.current.value);
      setDate(localStorage.getItem('date'));
      forceUpdate();
   };

   useEffect(() => {
      setDate(localStorage.getItem('date'));
   }, [setDate]);

   return (
      <SortedTasksContainer
         text={`Tasks for ${date ? date.split('-').reverse().join('.') : '...'}`}
         ThunkGetTasks={ThunkGetUserTasksForASpecificDate}
      >
         <div className="calendar">
            <input type="date" className="date" ref={dateValue} onChange={onChange} value={date} />
         </div>
      </SortedTasksContainer>
   );
};

export default TasksForASpecificDate;
