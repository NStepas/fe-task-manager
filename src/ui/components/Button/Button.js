import './Button.scss';

const Button = ({ type, text, onClick, isActive }) => (
   <button type={type} onClick={onClick} className={isActive ? 'active' : null}>
      {text}
   </button>
);

export default Button;
