import SortedTasksContainer from '../SortedTasksContainer';
import { ThunkGetTodayUserTasks } from '../../../../store/tasks/thunks/ThunkTasks';

const TodayTasks = () => {
   return <SortedTasksContainer text="Today Tasks" ThunkGetTasks={ThunkGetTodayUserTasks} />;
};

export default TodayTasks;
