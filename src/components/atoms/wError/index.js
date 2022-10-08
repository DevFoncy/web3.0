import React from 'react';
import PropTypes from 'prop-types';

const wError = React.forwardRef(({ children, className }, ref) => (
  <div className={`component-error ${className}`} ref={ref}>
    {children}
  </div>
));

wError.displayName = 'wError';

wError.defaultProps = {
};

wError.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default wError;
