import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Auth/Login/Login';
import SignUp from '../pages/Auth/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  TODOLIST_ROUTE,
} from '../../constants/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={TODOLIST_ROUTE} element={<PrivateRoute />} />
      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={SIGNUP_ROUTE} element={<SignUp />} />
      <Route path='*' element={<Navigate to={TODOLIST_ROUTE} />} />
    </Routes>
  );
};

export default AppRoutes;
