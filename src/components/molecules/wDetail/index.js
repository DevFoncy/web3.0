/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import PropTypes from 'prop-types';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendTransaction from '../wTransaction';

const wDetail = ({ className, ...props }) => (
  <div className={`component__transaction ${className}`}>
    <div className="map-body_filters">
      <div>
        <img src="https://picsum.photos/300" alt="" />
      </div>
      <div className="filters_search">
        <h4 className="filters_title"> Hotel Kirnbacher Hof</h4>
        <div className="s-pt-1">
          <ul>
            <li>
              <LocationOnIcon /> 8000 Southeast I-70 Highway, Topeka OCL, KS, 66542
            </li>
            <li>
              <LanguageIcon /> ChargePoint
            </li>
            <li>
              <InstallMobileIcon /> +1 888-758-4389
            </li>
            <li>
              <AccessTimeIcon /> 24 hours
            </li>
          </ul>
        </div>
      </div>

      <div>
        <SendTransaction />
      </div>
    </div>
  </div>
);

wDetail.displayName = 'wDetail';
wDetail.defaultProps = {
  className: '',
};
wDetail.propTypes = {
  className: PropTypes.string,
};
export default wDetail;
