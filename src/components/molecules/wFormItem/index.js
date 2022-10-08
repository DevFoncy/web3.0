/* eslint-disable no-unused-vars */
import React  from 'react';
import PropTypes from 'prop-types';

import WError from '../../atoms/wError';
import WFormInput from '../../atoms/wFormInput';
import WFormTextarea from '../../atoms/wFormTextarea';

const wFormItem = React.forwardRef(({label,formik, name, type, id, placeholder, isRequired, className}, ref) => {
  const isError = () => (formik.touched[name] && formik.errors[name])
  return (
    <div ref={ref} className={`component__form-item ${className}`}>
      <label htmlFor={id}>{label} {isRequired && <span className="is-required">*</span>} </label>
      {
        type === 'textarea'
        ?<WFormTextarea
          id={id} 
          name={name} 
          placeholder={placeholder} 
          formik={formik} 
          error={!!isError()}
        />
        :<WFormInput 
            id={id} 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            formik={formik} 
            error={!!isError()}
          />
      }
      <WError>{isError()}</WError>
    </div>
  );
});
wFormItem.displayName = 'wFormItem';
wFormItem.defaultProps = {
  className: '',
  label: '',
  name: '',
  type: 'text',
  id: '',
  placeholder: '',
  isRequired: false,
};
wFormItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  formik: PropTypes.object.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};
export default wFormItem;