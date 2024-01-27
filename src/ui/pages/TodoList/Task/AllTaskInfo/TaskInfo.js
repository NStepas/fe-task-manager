import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { Field, FormikProvider, useFormik } from 'formik';
import { initialValues, validate } from './formValidationForUpdateTask';
import { ThunkGetTask, ThunkUpdateTask } from '../../../../../store/tasks/thunks/ThunkTasks';

const TaskInfo = props => {
   const { onClose } = props;
   const [loading, setLoading] = useState(true);
   const [task, setTask] = useState([]);
   const [disabled, setDisabled] = useState(true);
   const dispatch = useDispatch();
   const taskId = localStorage.getItem('id');

   useEffect(() => {
      onMount();
   }, []);

   const onMount = async () => {
      setTask(await dispatch(ThunkGetTask(taskId)));
      setLoading(false);
   };

   const handleSubmit = async values => {
      if (values.isImportant === 'important') {
         values.is_important = true;
      } else {
         values.is_important = false;
      }
      const payload = {
         taskName: values.taskName ?? task.payload.task_name,
         description: values.description ?? task.payload.description,
         date: values.date ?? task.payload.complete_date,
         isImportant: values.is_important ?? task.payload.is_important,
         address: values.address ?? task.payload.address,
      };

      await dispatch(ThunkUpdateTask(payload));
      onClose();
   };

   const formik = useFormik({
      initialValues,
      validationSchema: validate,
      onSubmit: handleSubmit,
   });

   useEffect(() => {
      const close = e => {
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

   const disabledHandler = () => {
      setDisabled(false);
   };

   return (
      <div className="task-info">
         {loading ? (
            <div>Loading...</div>
         ) : (
            <>
               <div key={task.payload.id}>
                  <FormikProvider value={formik}>
                     <form className="all-info" onSubmit={formik.handleSubmit}>
                        {disabled ? <h1>Task Info</h1> : <h1>Update Task Info</h1>}
                        <Input
                           formik={formik}
                           initialvalue={task.payload.task_name}
                           text={task.payload.task_name}
                           name="taskName"
                           type="string"
                           disabled={disabled}
                           required="required"
                        />
                        <Field
                           formik={formik}
                           initialvalue={task.payload.description}
                           placeholder={task.payload.description}
                           name="description"
                           as="textarea"
                           type="string"
                           disabled={disabled}
                           required="required"
                        />
                        <Field formik={formik} as="select" name="isImportant" initialvalue={task.payload.isImportant} disabled={disabled} required="required">
                           <option value="not-important">Not important</option>
                           <option value="important">Is important</option>
                        </Field>
                        <Input formik={formik} name="date" type="Date" text="Date" initialvalue={task.payload.complete_date} disabled={disabled} required="required" />
                        <Input
                           formik={formik}
                           initialvalue={task.payload.address}
                           text={task.payload.address}
                           name="address"
                           type="string"
                           disabled={disabled}
                           required="required"
                        />
                        {disabled ? (
                           <Button type="button" text={'Update Task'} onClick={disabledHandler} />
                        ) : (
                           <Button type="submit" text={'Save changes'} onClick={handleSubmit} />
                        )}
                        <Button type="button" text={'Cancel'} onClick={onClose} />
                     </form>
                  </FormikProvider>
               </div>
            </>
         )}
      </div>
   );
};

export default TaskInfo;
