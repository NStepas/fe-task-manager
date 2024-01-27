import { createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../../service/index';

const userId = localStorage.getItem('userId');

export const ThunkGetAllTasks = createAsyncThunk('task/getAllTasks', async () => {
   const tasks = await api.tasks.getAllTasks(userId);
   if (tasks.error) {
      return (tasks = tasks.error.errorMessage);
   }
   return tasks;
});
export const ThunkGetTask = createAsyncThunk('task/getTask', async taskId => {
   const tasks = await api.tasks.getTask(userId, taskId);
   if (tasks.error) {
      return (tasks = tasks.error.errorMessage);
   }
   return tasks;
});

export const ThunkAddNewTask = createAsyncThunk('task/addNewTask', async payload => {
   const { ...rest } = await api.tasks.addTasks(payload, userId);
   const { error } = rest;
   if (error) {
      alert(error.errorMessage);
   } else {
      return rest;
   }
});

export const ThunkUpdateTask = createAsyncThunk('task/updateTask', async values => {
   const userId = localStorage.getItem('userId');
   const taskId = localStorage.getItem('id');
   const payload = {
      ...values,
      taskId: +taskId,
      userId: userId,
      completeDate: values.date.split('-').reverse().join('.'),
   };
   const { ...rest } = await api.tasks.updateTask(userId, taskId, payload);
   const { error } = rest;
   if (error) {
      alert(error.errorMessage);
   } else {
      return rest;
   }
});

export const ThunkDeleteUserTask = createAsyncThunk('task/deleteUserTask', async taskId => {
   const { ...rest } = await api.tasks.deleteTask(taskId);
   const { error } = rest;
   if (error) {
      alert(error.errorMessage);
   } else {
      return rest;
   }
});

export const ThunkGetImportantUserTasks = createAsyncThunk(
   'task/getImportantUserTasks',
   async () => {
      const userId = localStorage.getItem('userId');
      const tasks = await api.tasks.getImportantUserTasks(userId);
      if (tasks.error) {
         return (tasks = tasks.error.errorMessage);
      }
      return tasks;
   }
);

export const ThunkGetTodayUserTasks = createAsyncThunk('task/getTodayUserTasks', async () => {
   const userId = localStorage.getItem('userId');
   const tasks = await api.tasks.getTodayUserTasks(userId);
   if (tasks.error) {
      return (tasks = tasks.error.errorMessage);
   }
   return tasks;
});

export const ThunkGetUserTasksForASpecificDate = createAsyncThunk(
   '/task/getUserTasksForASpecificDate',
   async () => {
      const userId = localStorage.getItem('userId');
      const tasks = await api.tasks.getUserTasksForASpecificDate(userId);
      if (tasks.error) {
         return (tasks = tasks.error.errorMessage);
      }
      return tasks;
   }
);
