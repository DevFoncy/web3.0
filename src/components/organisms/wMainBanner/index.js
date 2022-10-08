import React from 'react';
import PropTypes from 'prop-types';
import { pathServer } from '../../../lib/shared/constants/Strings';

const wBanner = () => (
  <div className="container__banner" id="main-banner">
    <div className="image-container">
      <img className="image-banner" src={`${pathServer.PATH_IMG}banner/banner.jpeg`} alt="" />
    </div>
  </div>
);

wBanner.displayName = 'wBanner';

wBanner.defaultProps = {
  image: { isImage: true },
  hasFooter: true,
};

wBanner.propTypes = {
  image: PropTypes.shape({}),
  hasFooter: PropTypes.bool,
};

export default wBanner;
