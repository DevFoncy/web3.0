/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const wMaps = ({ location }) => {
  const MapWithNoSSR = useMemo(
    () =>
      dynamic(() => import('../../molecules/wMap/index'), {
        loading: () => <p>Espere un momento</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className={`section__maps `}>
      <div className="map-container">
        <MapWithNoSSR location={location} />
      </div>
    </div>
  );
};
wMaps.displayName = 'wMaps';
wMaps.defaultProps = {};
wMaps.propTypes = {
  location: PropTypes.object,
};
export default wMaps;
