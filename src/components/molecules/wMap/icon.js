import L from 'leaflet';

const iconPerson = new L.Icon({
  // eslint-disable-next-line global-require
  iconUrl: require('../../../../public/images/company/logo.svg'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(30, 35),
  className: 'leaflet-div-icon',
});

export { iconPerson };
