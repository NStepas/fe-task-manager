import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AllTasks from './SortedTasks/AllTasks';

import { LOGIN_ROUTE } from '../../../constants/routes';

import './TodoList.scss';

const TodoList = () => {
   const navigate = useNavigate();
   const { isAuth } = useSelector(state => state.auth);
   return <div className="todoList-page">{isAuth ? <AllTasks /> : navigate(LOGIN_ROUTE)}</div>;
};

export default TodoList;
