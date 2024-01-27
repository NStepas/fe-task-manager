import { Navigate, Route, Routes } from 'react-router-dom';

import AllTasks from '../pages/TodoList/SortedTasks/AllTasks';
import ImportantTasks from '../pages/TodoList/SortedTasks/ImportantTasks';
import TodayTasks from '../pages/TodoList/SortedTasks/TodayTasks';
import TasksForASpecificDate from '../pages/TodoList/SortedTasks/TasksForASpecificDate';

import { LOGIN_ROUTE } from '../../constants/routes';

const PrivateRoute = () => {
  const isAuth = localStorage.getItem('isLoggedIn');
  return isAuth ? (
    <Routes>
      <Route path='/*' element={<AllTasks />} />
      <Route path='/importantTasks' element={<ImportantTasks />} />
      <Route path='/todayTasks' element={<TodayTasks />} />
      <Route path='/specificDateTasks' element={<TasksForASpecificDate />} />
    </Routes>
  ) : (
    <Navigate to={LOGIN_ROUTE} />
  );
};

export default PrivateRoute;
