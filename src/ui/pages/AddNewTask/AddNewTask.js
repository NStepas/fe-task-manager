import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import { useFormik } from 'formik';
import { Field, FormikProvider } from 'formik';
import { initialValues, validate } from './formValidation';
import { ThunkAddNewTask } from '../../../store/tasks/thunks/ThunkTasks';

import './AddNewTask.scss';

const AddNewTask = (props) => {
  const dispatch = useDispatch();

  const { onClose } = props;

  const handleSubmit = async (values) => {
    if (values.isImportant === 'is-important') {
      values.isImportant = true;
    }
    if (values.isImportant === 'not-important') {
      values.isImportant = false;
    }
    await dispatch(ThunkAddNewTask(values));

    onClose();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validate,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Submit') {
        formik.handleSubmit();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit} className='add-new-task-form'>
        <h1>{'Add New Task'}</h1>
        <Input formik={formik} name='taskName' type='string' text='Name' />
        <Field
          formik={formik}
          name='description'
          as='textarea'
          type='string'
          text='Description'
          placeholder='Description'
        />
        <Input formik={formik} name='completeDate' type='Date' text='Date' />
        <Field as='select' name='isImportant'>
          <option value='not-important'>Not important</option>
          <option value='is-important'>Is important</option>
        </Field>

        <Input formik={formik} name='address' type='string' text='Address' />
        <Button type='submit' text={'Add New Task'} />
        <Button type='button' text={'Cancel'} onClick={onClose} />
      </form>
    </FormikProvider>
  );
};

export default AddNewTask;
