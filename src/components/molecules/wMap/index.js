import React from 'react';
import PropTypes from 'prop-types';

import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import L from 'leaflet';

import Button from '@mui/material/Button';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { ReactSVG } from 'react-svg';
import { pathServer } from '../../../lib/shared/constants/Strings';

const limeOptions = { color: '#f22738', weight: 1 };

function MapContent({ title }) {
  return (
    <div className="map_point">
      <p className="title font-bold">{title}</p>
      <div className="map_body">
        <div className="map_title">
          <b className="color-green">Open</b>* 24 hours
        </div>
        <div className="map_title">
          <small>Bad Kotzting, Lienemstein 25</small>
        </div>
      </div>
      <div className="flex-full">
        <p>
          <b style={{ color: 'white' }}>#1 Comfortacharge</b> | 22kw |{' '}
          <b className="color-green">+2</b>{' '}
        </p>
        <ReactSVG src={`${pathServer.HACKATON_ICONS}ic_car.svg`} />
      </div>
      <div className="map_footer flex-full">
        <p>Not occupied</p>
        <Button
          size="small"
          style={{ color: '#03AB6E', borderColor: '#03AB6E', fontSize: '10px' }}
          variant="outlined"
        >
          Reserve
        </Button>
        <ReactSVG src={`${pathServer.HACKATON_ICONS}ic_share.svg`} />
      </div>
    </div>
  );
}

const COORDINATES = [
  { lat: '4.6299756', lng: '-74.0934362' },
  { lat: '4.633746', lng: '-74.093664' },
  { lat: '4.625932', lng: ' -74.097210' },
  { lat: '4.630405', lng: '-74.099428' },
];

const wMap = ({ location }) => {
  const { coordinatesPois, coordinate, title } = location;

  const icon = L.icon({ iconUrl: '/images/ic_map.png' });
  console.log('coordinate', coordinate);
  return (
    <div>
      <MapContainer
        attributionControl
        center={[COORDINATES[0].lat, COORDINATES[0].lng]}
        zoom={16}
        // maxZoom={17}
        scrollWheelZoom
        doubleClickZoom
        dragging
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {COORDINATES.map((c) => (
          <Marker position={[c.lat, c.lng]} animate icon={icon}>
            <Popup>
              <MapContent title={title} />
            </Popup>
          </Marker>
        ))}

        <Polygon pathOptions={limeOptions} positions={coordinatesPois} />
      </MapContainer>
    </div>
  );
};

wMap.displayName = 'wMap';

wMap.defaultProps = {};

wMap.propTypes = {
  location: PropTypes.object,
};

export default wMap;
