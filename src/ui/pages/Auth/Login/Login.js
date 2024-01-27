import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

import { ThunkLoginUser } from '../../../../store/auth/thunk/ThunkAuth';
import { useFormik } from 'formik';
import { initialValues, validate } from './formValidation';

import { SIGNUP_ROUTE, TODOLIST_ROUTE } from './../../../../constants/routes';
import '../Auth.scss';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const handleSubmit = async (values) => {
    await dispatch(ThunkLoginUser(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validate,
    onSubmit: handleSubmit,
  });

  const navigateHandle = () => {
    navigate(SIGNUP_ROUTE);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(TODOLIST_ROUTE);
    }
  }, [isAuth]);

  return (
    <form onSubmit={formik.handleSubmit} className='AuthForm'>
      <h1>Login</h1>
      <Input formik={formik} name='email' type='email' autoComplete='email' />
      <Input
        formik={formik}
        name='password'
        type='password'
        autoComplete='current-password'
      />
      <Button type='submit' text={'Login'} />
      <Button type='button' text={'SignUp'} onClick={navigateHandle} />
    </form>
  );
};

export default Login;
