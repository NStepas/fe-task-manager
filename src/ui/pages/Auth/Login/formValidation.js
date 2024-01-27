import * as Yup from 'yup';
import {
   EMAIL_ERROR,
   IS_REQUIRED,
   PASSWORD_MAX_ERROR,
   PASSWORD_MIN_ERROR,
} from '../../../../constants/formTexts';

const initialValues = {
   email: '',
   password: '',
};

const validate = Yup.object({
   email: Yup.string().required(IS_REQUIRED).email(EMAIL_ERROR),
   password: Yup.string()
      .required(IS_REQUIRED)
      .min(5, PASSWORD_MIN_ERROR)
      .max(16, PASSWORD_MAX_ERROR),
});

export { initialValues, validate };
