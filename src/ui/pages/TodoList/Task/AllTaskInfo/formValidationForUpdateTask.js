import * as Yup from 'yup';
import { DATE_ERROR, TEXT_LENGTH } from '../../../../../constants/formTexts';

const initialValues = {
   taskName: '',
   description: '',
   date: '',
   isImportant: '',
   address: '',
};

const date = new Date();
date.setDate(date.getDate() - 1);

const validate = Yup.object({
   taskName: Yup.string().min(1, TEXT_LENGTH).max(30, TEXT_LENGTH),
   description: Yup.string(),
   date: Yup.date().min(date, DATE_ERROR),
   isImportant: Yup.string(),
   address: Yup.string(),
});

export { initialValues, validate };
