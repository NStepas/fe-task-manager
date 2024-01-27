import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import TaskInfo from './TaskInfo';

import './ModalTaskInfo.scss';

const Backdrop = props => {
   return <div className="backdrop" onClick={props.onClose} />;
};

const portalElement = document.getElementById('all-info-about-task');

const Modal = props => {
   const { onClose } = props;
   return (
      <Fragment>
         {ReactDOM.createPortal(<Backdrop className="backdrop" onClose={onClose} />, portalElement)}
         {ReactDOM.createPortal(<TaskInfo onClose={onClose} />, portalElement)}
      </Fragment>
   );
};

export default Modal;
