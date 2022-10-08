/* eslint-disable no-unused-vars */
import React from 'react';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ReactSVG } from 'react-svg';
import WFormInput from '../../atoms/wFormInput';
import { LEGEND_PLACES } from './Constants';

import { pathServer } from '../../../lib/shared/constants/Strings';

function LegendField({ item }) {
  return (
    <Box>
      <div className="d-flex">
        <ReactSVG src={`${pathServer.HACKATON_ICONS}ic_location_${item.id}.svg`} />
        <p style={{ marginLeft: '5px' }} className="ml-0">
          {item.name}
        </p>
      </div>
    </Box>
  );
}

function LegendStatus() {
  return (
    <div className="legend_status mt-1">
      <div className="d-flex">
        <ReactSVG src={`${pathServer.HACKATON_ICONS}ic_available.svg`} />
        <p style={{ marginLeft: '5px' }}>Available</p>
      </div>

      <div className="d-flex">
        <ReactSVG src={`${pathServer.HACKATON_ICONS}ic_busy.svg`} />
        <p style={{ marginLeft: '5px' }}>Busy</p>
      </div>

      <div className="d-flex">
        <ReactSVG src={`${pathServer.HACKATON_ICONS}ic_offline.svg`} />
        <p style={{ marginLeft: '5px' }}>Offline</p>
      </div>
    </div>
  );
}

const wSearch = React.forwardRef(({ className, ...props }, ref) => (
  <div className={`component__search ${className}`}>
    <div className="map-body_filters">
      <div className="filters_search">
        <h4 className="filters_title"> Get directions</h4>
        <WFormInput label="Enter your address" />
        <WFormInput label="Enter the addres of the station" withIcon={false} />
      </div>

      <div className="legend-container">
        <h4 className="filters_title">
          {' '}
          <LocationOnIcon fontSize="12px" />
          Legend
        </h4>
        <div className="filters_legend">
          {LEGEND_PLACES.map((l) => (
            <LegendField item={l} />
          ))}
        </div>
        <LegendStatus />
      </div>
      <div>
        <h4 className="filters_title"> Filters</h4>
      </div>

      <div className="filters_status" />
    </div>
  </div>
));
wSearch.displayName = 'wSearch';
wSearch.defaultProps = {
  className: '',
};
wSearch.propTypes = {
  className: PropTypes.string,
};
export default wSearch;
