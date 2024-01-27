import './Input.scss';

const Input = ({ formik, name, type, text, autoComplete, disabled }) => (
   <div className="input">
      <input
         id={name}
         name={name}
         type={type}
         disabled={disabled}
         autoComplete={autoComplete}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values[name]}
         placeholder={text}
         autoComplete={autoComplete}
      />
      {formik.errors[name] && <p className="error">{formik.errors[name]}</p>}
   </div>
);

export default Input;
