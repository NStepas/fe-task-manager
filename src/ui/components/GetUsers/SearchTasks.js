import React, { useState, useEffect } from 'react';

import Loader from '../Loader/Loader';
import SearchList from './SearchList';
import ShowTasks from './ShowTasks';

import './../../pages/TodoList/TodoList.scss';
import './Search.scss';

const SearchTasks = props => {
   const { tasks } = props;
   const [searchInput, setSearchInput] = useState();
   const [loading, setLoading] = useState(true);
   const [active, setActive] = useState(false);
   const [filteredTasks, setFilteredTasks] = useState([]);

   useEffect(() => {
      setLoading(false);
      (() => {
         setFilteredTasks(
            tasks?.payload?.filter(task => {
               if (task.task_name && searchInput) {
                  return task.task_name?.toLowerCase().includes(searchInput.toLowerCase());
               } else return;
            })
         );
      })();
   }, [searchInput]);

   const handleChange = e => {
      const delayDebounceFn = setTimeout(() => {
         setSearchInput(e.target.value);
      }, 300);
      return () => clearTimeout(delayDebounceFn);
   };

   useEffect(() => {
      if (searchInput) {
         setActive(true);
      } else {
         setActive(false);
      }
   }, [searchInput]);

   return (
      <div>
         {loading ? (
            <div className="spinner-container">
               <Loader />
            </div>
         ) : (
            <div className="search-input-container">
               <input
                  className="search-input"
                  type="search"
                  placeholder="Search Task"
                  onChange={handleChange}
               />
               {active ? <SearchList filteredTasks={filteredTasks} /> : <ShowTasks tasks={tasks} />}
            </div>
         )}
      </div>
   );
};

export default SearchTasks;
