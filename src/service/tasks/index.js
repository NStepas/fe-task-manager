import { apiService } from '../apiService';

import {
   ADD_USER_TASK,
   GET_TASK_URL,
   UPDATE_TASK,
   DELETE_TASKS_URL,
   USER_IMPORTANT_TASKS_URL,
   ALL_USER_TASKS_URL,
   USER_TODAY_TASKS_URL,
   USER_TASKS_FOR_A_SPECIFIC_DATE_URL,
} from '../../constants/url';

const userId = localStorage.getItem('userId');

export const getTask = (userId, id) => {
   return apiService(`${GET_TASK_URL}/${userId}/${id}`, 'GET');
};

export const getAllTasks = userId => apiService(`${ALL_USER_TASKS_URL}/${userId}`, 'GET');

export const addTasks = payload => {
   return apiService(`${ADD_USER_TASK}/${userId}`, 'POST', JSON.stringify(payload));
};

export const updateTask = (userId, taskId, payload) => {
   return apiService(`${UPDATE_TASK}/${userId}/${taskId}`, 'PUT', JSON.stringify(payload));
};

export const deleteTask = id => {
   return apiService(`${DELETE_TASKS_URL}/${id}`, 'DELETE');
};

export const getImportantUserTasks = userId =>
   apiService(`${USER_IMPORTANT_TASKS_URL}/${userId}`, 'GET');

export const getTodayUserTasks = userId => apiService(`${USER_TODAY_TASKS_URL}/${userId}`, 'GET');

export const getUserTasksForASpecificDate = userId => {
   const date = localStorage.getItem('date');
   return apiService(`${USER_TASKS_FOR_A_SPECIFIC_DATE_URL}/${userId}/${date}`, 'GET');
};
