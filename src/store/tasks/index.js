import { createSlice } from '@reduxjs/toolkit';

import {
   ThunkAddNewTask,
   ThunkDeleteUserTask,
   ThunkGetTodayUserTasks,
   ThunkGetAllTasks,
   ThunkGetTask,
   ThunkUpdateTask,
   ThunkGetImportantUserTasks,
   ThunkGetUserTasksForASpecificDate,
} from './thunks/ThunkTasks';

const initialState = {
   current: {},
   list: [],
   isPending: false,
};
export const tasks = createSlice({
   name: 'tasks',
   initialState,
   extraReducers: builder => {
      builder
         .addCase(ThunkGetAllTasks, (state, payload) => {
            state.list = payload;
         })
         .addCase(ThunkGetTask.fullfield, (state, payload) => {
            state.list = payload;
         })
         .addCase(ThunkUpdateTask.fullfield, (state, action) => {
         })
         .addCase(ThunkAddNewTask.fullfield, (state, action) => {
         })
         .addCase(ThunkDeleteUserTask, state => {
         })
         .addCase(ThunkGetImportantUserTasks, (state, payload) => {
            state.list = payload;
         })
         .addCase(ThunkGetTodayUserTasks, (state, action) => {
            state.list = action.payload;
         })
         .addCase(ThunkGetUserTasksForASpecificDate, (state, action) => {
            state.list = action.payload;
         });
   },
});
