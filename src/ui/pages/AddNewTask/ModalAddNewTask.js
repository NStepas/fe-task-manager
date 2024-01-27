import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import AddNewTask from './AddNewTask';

import '../../assets/styles/styles.scss';
import './ModalAddNewTask.scss';

const Backdrop = props => {
   return <div className="backdrop" onClick={props.onClose} />;
};

const portalElement = document.getElementById('add-new-task');

const Modal = props => {
   const { onClose } = props;
   return (
      <Fragment>
         {ReactDOM.createPortal(<Backdrop className="backdrop" onClose={onClose} />, portalElement)}
         {ReactDOM.createPortal(
            <AddNewTask className="add-new-task-form" onClose={onClose} />,
            portalElement
         )}
      </Fragment>
   );
};

export default Modal;
