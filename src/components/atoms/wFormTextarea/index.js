/* eslint-disable no-unused-vars */
import React  from 'react';
import PropTypes from 'prop-types';

const wFormTextarea = React.forwardRef(({ formik, name, id, placeholder, className, error, disabled}, ref) => (
    <div className={`container-textarea ${className}`}>
      <textarea 
        id={id} 
        name={name} 
        disabled={disabled}
        className={`form-control ${error && 'alert'}`}
        rows="4" 
        cols="3"
        placeholder={placeholder} 
        {...formik.getFieldProps(name)}
      />
    </div>
  ));
wFormTextarea.displayName = 'wFormTextarea';
wFormTextarea.defaultProps = {
  className: '',
  name: '',
  type: 'text',
  id: '',
  placeholder: '',
  error: false
};
wFormTextarea.propTypes = {
  className: PropTypes.string,
  formik: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool
};
export default wFormTextarea;