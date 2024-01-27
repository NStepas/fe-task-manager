import { createSlice } from '@reduxjs/toolkit';

import ActionSetAuthState from '../auth/actions/setAuthState';
import { ThunkLoginUser, ThunkSignUpUser } from './thunk/ThunkAuth';

const initialAuthState = {
   token: '',
   isAuth: false,
};

const auth = createSlice({
   name: 'auth',
   initialState: initialAuthState,
   reducers: {
      logout(state) {
         ActionSetAuthState(state, false);
         localStorage.clear();
      },
   },
   extraReducers: builder => {
      builder
         .addCase(ThunkLoginUser.fulfilled, (state, { payload }) => {
            ActionSetAuthState(state, payload ? true : false);
         })
         .addCase(ThunkSignUpUser.fulfilled, (state, { payload }) => {
            ActionSetAuthState(state, payload ? true : false);
         });
   },
});

export const { logout, setAuthState } = auth.actions;

export default auth.reducer;
