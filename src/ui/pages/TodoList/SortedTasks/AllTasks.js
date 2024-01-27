import SortedTasksContainer from '../SortedTasksContainer';
import { ThunkGetAllTasks } from '../../../../store/tasks/thunks/ThunkTasks';

const AllTasks = () => {
   return <SortedTasksContainer text="All Tasks" ThunkGetTasks={ThunkGetAllTasks} />;
};

export default AllTasks;
