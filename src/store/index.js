import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import auth from './auth/auth';
import { tasks } from './tasks';

const store = configureStore({
   reducer: { auth, tasks },
   middleware: [thunk],
});

export default store;
