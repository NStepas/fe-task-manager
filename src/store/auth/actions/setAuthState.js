const ActionSetAuthState = (state, action) => {
   state.isAuth = action;
   localStorage.setItem('isLoggedIn', action);

};

export default ActionSetAuthState;
