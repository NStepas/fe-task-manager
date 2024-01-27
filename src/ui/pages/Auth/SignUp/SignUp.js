import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import { ThunkSignUpUser } from '../../../../store/auth/thunk/ThunkAuth';
import { useFormik } from 'formik';
import { initialValues, validate } from './formValidation';

import { LOGIN_ROUTE } from './../../../../constants/routes';
import '../Auth.scss';

const SignUp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = async values => {
      await dispatch(ThunkSignUpUser(values));
      navigate(LOGIN_ROUTE);
   };

   const formik = useFormik({
      initialValues,
      validationSchema: validate,
      onSubmit: handleSubmit,
   });

   const navigateHandle = () => {
      navigate(LOGIN_ROUTE);
   };

   return (
      <form onSubmit={formik.handleSubmit} className="AuthForm">
         <h1>{'SignUp'}</h1>
         <Input formik={formik} name="firstName" type="string" autoComplete="first_name" />
         <Input formik={formik} name="lastName" type="string" autoComplete="family_name" />
         <Input formik={formik} name="email" type="email" autoComplete="email" />
         <Input formik={formik} name="password" type="password" autoComplete="password" />
         <Input formik={formik} name="confirmPassword" type="password" autoComplete="password" />
         <Input formik={formik} name="phone" type="string" autoComplete="phone" />
         <Input formik={formik} name="address" type="string" autoComplete="address" />
         <Button type="submit" text={'SignUp'} />
         <Button type="button" text={'Login'} onClick={navigateHandle} />
      </form>
   );
};

export default SignUp;
