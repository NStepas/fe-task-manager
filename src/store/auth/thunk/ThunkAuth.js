import { createAsyncThunk } from '@reduxjs/toolkit';

import Alert from '@mui/material/Alert';
// import { AlertTitle } from '@mui/material';
import api from '../../../service/index';

export const ThunkLoginUser = createAsyncThunk('auth/login', async payload => {
   const { firstName, lastName, accessToken, userId, ...rest } = await api.auth.login(payload);
   localStorage.setItem('token', accessToken);
   localStorage.setItem('userId', userId);
   localStorage.setItem('firstName', firstName);
   localStorage.setItem('lastName', lastName);
   const { error } = rest;
   if (error) {
      alert(error.errorMessage);
   } else {
      return rest;
   }
});

export const ThunkSignUpUser = createAsyncThunk('auth/signUp', async payload => {
   const { userId, firstName, lastName, accessToken, ...rest } = await api.auth.signUp(payload);
   localStorage.setItem('userId', userId);
   localStorage.setItem('token', accessToken);
   localStorage.setItem('firstName', firstName);
   localStorage.setItem('lastName', lastName);
   const { error } = rest;
   if (error) {
      return alert(error.errorMessage);
   } else {
      return rest;
   }
});
