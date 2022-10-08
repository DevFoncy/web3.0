import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { COMPANY_LOCATION } from '../../../lib/util/Company';

import WMaps from '../wMaps';
import WSearch from '../../molecules/wSearch';
import WDetail from '../../molecules/wDetail';

const wMainContent = () => {
  const [location] = useState(COMPANY_LOCATION.santa_anita);

  return (
    <div className="MapLocation">
      <div className="map-body">
        <WSearch />
        <div>
          <WMaps location={location} />
        </div>
        <div className="map-body_result">
          <WDetail />
        </div>
      </div>
    </div>
  );
};

wMainContent.displayName = 'wMainContent';

wMainContent.defaultProps = {};

wMainContent.propTypes = {
  className: PropTypes.string,
};

export default wMainContent;
