import React from 'react';
import PropTypes from 'prop-types';
import { pathServer } from '../../../lib/shared/constants/Strings';

const wSpinner = React.forwardRef(({ className }, ref) => (
  <div className={`${className} loading-component`} ref={ref}>
    <div className="loading-component__content">
      <img src={`${pathServer.PATH_IMG}company/loading.gif`} alt="" />
    </div>
  </div>
));

wSpinner.displayName = 'wSpinner';

wSpinner.defaultProps = {
  className: '',
};

wSpinner.propTypes = {
  className: PropTypes.string,
};

export default wSpinner;
