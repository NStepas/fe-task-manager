import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Loader from '../Loader/Loader';
import SearchTasks from './SearchTasks';

import './../../pages/TodoList/TodoList.scss';
import './Search.scss';

const FetchTasks = props => {
   const { ThunkGetTasks } = props;
   const [tasks, setTasks] = useState([]);
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(true);

   const onMount = async () => {
      setTasks(await dispatch(ThunkGetTasks()));
      setTimeout(() => {
         setLoading(false);
      }, 500);
   };

   useEffect(() => {
      onMount();
   }, []);
   return (
      <div>
         {loading ? (
            <div className="spinner-container">
               <Loader />
            </div>
         ) : (
            <SearchTasks tasks={tasks} />
         )}
      </div>
   );
};

export default FetchTasks;
