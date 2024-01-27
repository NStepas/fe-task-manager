import * as Yup from 'yup';
import { DATE_ERROR, IS_REQUIRED, TEXT_LENGTH } from '../../../constants/formTexts';

const initialValues = {
   taskName: '',
   description: '',
   completeDate: '',
   isImportant: '',
   address: '',
};

const date = new Date();
date.setDate(date.getDate() - 1);

const validate = Yup.object({
   taskName: Yup.string().min(1, TEXT_LENGTH).max(30, TEXT_LENGTH).required(IS_REQUIRED),
   description: Yup.string(),
   completeDate: Yup.date().min(date, DATE_ERROR),
   isImportant: Yup.string().required(IS_REQUIRED),
   address: Yup.string(),
});

export { initialValues, validate };
