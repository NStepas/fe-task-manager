import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import { logout } from '../../../store/auth/auth';

import { LOGIN_ROUTE } from '../../../constants/routes';

const LogOut = props => {
   const { text } = props;
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const logOutHandler = () => {
      dispatch(logout());
      navigate(LOGIN_ROUTE);
   };

   return <Button text={text} onClick={logOutHandler} />;
};

export default LogOut;
