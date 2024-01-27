import * as Yup from 'yup';
import {
   IS_REQUIRED,
   PASSWORD_MIN_ERROR,
   PASSWORD_MAX_ERROR,
   EMAIL_ERROR,
} from '../../../../constants/formTexts';

const phoneRegExp =
   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
   firstName: '',
   lastName: '',
   email: '',
   password: '',
   confirmPassword: '',
   phone: '',
   address: '',
};

const validate = Yup.object({
   firstName: Yup.string().required(IS_REQUIRED),
   lastName: Yup.string().required(IS_REQUIRED),
   email: Yup.string().required(IS_REQUIRED).email(EMAIL_ERROR),
   password: Yup.string()
      .required(IS_REQUIRED)
      .min(5, PASSWORD_MIN_ERROR)
      .max(16, PASSWORD_MAX_ERROR),
   confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match'),
   phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
   address: Yup.string(),
});

export { initialValues, validate };
