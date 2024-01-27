import SortedTasksContainer from '../SortedTasksContainer';
import { ThunkGetImportantUserTasks } from '../../../../store/tasks/thunks/ThunkTasks';

const ImportantTasks = () => {
   return (
      <SortedTasksContainer text="Important Tasks" ThunkGetTasks={ThunkGetImportantUserTasks} />
   );
};

export default ImportantTasks;
