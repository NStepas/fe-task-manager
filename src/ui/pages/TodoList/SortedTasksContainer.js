import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import FetchTasks from '../../components/GetUsers/FetchTasks';
import ModalAddNewTask from '../AddNewTask/ModalAddNewTask';
import LogOut from '../LogOut/LogOut';
import Button from '../../components/Button/Button';

import {
  IMPORTANTTASKS_ROUTE,
  TASKSFORASPECIFICDATE_ROUTE,
  TODAYTASKS_ROUTE,
  ALLTASKS_ROUTE,
  TODOLIST_ROUTE,
} from '../../../constants/routes';
import logo from '../../assets/icons/user-logo.svg';
import menu from '../../assets/icons/menu-item.svg';

import './TodoList.scss';

const SortedTasksContainer = (props) => {
  const { text, ThunkGetTasks } = props;
  const [cardIsShown, setCardIsShown] = useState(false);
  const dateValue = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToAllTasksHandle = () => {
    navigate(ALLTASKS_ROUTE);
  };
  const navigateToImportantTasksHandle = () => {
    navigate(IMPORTANTTASKS_ROUTE);
  };
  const navigateToTodayTasksHandle = () => {
    navigate(TODAYTASKS_ROUTE);
  };

  const showCardHandler = () => {
    setCardIsShown(true);
  };

  const hideCardHandler = () => {
    setCardIsShown(false);
  };

  const dateTasksHandle = async () => {
    localStorage.setItem(
      'date',
      dateValue.current.value.split('-').reverse().join('.')
    );
    navigate(TASKSFORASPECIFICDATE_ROUTE);
  };

  return (
    <div>
      <div className='todoList-page'>
        <div className='header'>
          <div className='todoList-name'>
            <img src={menu} alt={menu} className='menu' />
            <p>TodoList</p>
          </div>
          <div className='add-task-button-holder'>
            <Button
              onClick={showCardHandler}
              text='Add New Task'
              className='add-button'
              id='button'
            />
            <LogOut text='LogOut' />
            <img src={logo} alt={logo} className='logo' />
          </div>
        </div>
        <div className='todoList-container'>
          <div className='todoList-menu'>
            <div className='sorted-components'>
              <Button
                text='All Tasks'
                onClick={navigateToAllTasksHandle}
                isActive={
                  location.pathname === (ALLTASKS_ROUTE || TODOLIST_ROUTE)
                }
              />
              <Button
                text='Today'
                onClick={navigateToTodayTasksHandle}
                isActive={location.pathname === TODAYTASKS_ROUTE}
              />
              <Button
                text='Important'
                onClick={navigateToImportantTasksHandle}
                id='button'
                isActive={location.pathname === IMPORTANTTASKS_ROUTE}
              />
            </div>
          </div>
          {cardIsShown ? <ModalAddNewTask onClose={hideCardHandler} /> : null}

          <div className='todo-container'>
            <p>{text}</p>
            <FetchTasks ThunkGetTasks={ThunkGetTasks} />
          </div>

          <div className='calendar'>
            <input
              type='date'
              className='date'
              ref={dateValue}
              onChange={dateTasksHandle}></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortedTasksContainer;
