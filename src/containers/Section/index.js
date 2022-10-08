import React from 'react';
import PropTypes from 'prop-types';

const WSection = React.forwardRef(({ children, className, isVideo, ...props }, ref) => (
  <section  {...props} className={`section ${className} ${isVideo ? 'is-video' : 'is-image'}`} ref={ref}>
      {children}
  </section>
));

WSection.displayName = 'WSection';

WSection.defaultProps = {
  isVideo : false,
};

WSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVideo: PropTypes.bool,
};

export default WSection;
