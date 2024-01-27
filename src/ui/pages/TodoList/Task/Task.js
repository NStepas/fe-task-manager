import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../../components/Button/Button';
import { ThunkDeleteUserTask } from '../../../../store/tasks/thunks/ThunkTasks';

import './Task.scss';

const Task = (props) => {
  const dispatch = useDispatch();
  const { id, name, date, importance, onClick } = props;
  const [isChecked, setIsChecked] = useState(false);

  const deleteHandler = () => {
    const taskId = id;
    dispatch(ThunkDeleteUserTask(taskId));
  };

  const handleChange = (event) => {
    if (event.target.value) {
      const value = !isChecked;
      setIsChecked(value);
    }
  };

  return (
    <Fragment>
      <div className='task-container'>
        <div className='task-info' id={id}>
          <input type='checkbox' className='checkbox' onChange={handleChange} />
          <label>
            <a>{name}</a>
            <a>{date}</a>
            <a>{importance ? '!' : 'Not-important'}</a>
          </label>
        </div>

        <Button
          text='Show All Info'
          onClick={onClick}
          className='button'
          id={id}
        />

        {isChecked ? (
          <Button
            text='Delete task'
            className='button'
            onClick={deleteHandler}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export default Task;
