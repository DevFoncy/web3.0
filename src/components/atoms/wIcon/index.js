import React from 'react';
import PropTypes from 'prop-types';
import {ReactSVG} from "react-svg";
import {pathServer} from "../../../lib/shared/constants/Strings";

const wIcon = React.forwardRef(({ className, url, width, height, onClick}, ref) => (
  <ReactSVG 
    ref={ref} 
    src={pathServer.PATH_IMG + url} 
    onClick={onClick} 
    style={{width, height}} 
    className={`icon-container  ${className}`} 
  />
));

wIcon.displayName = 'wIcon';

wIcon.defaultProps = {
  className: '',
  height: 'auto',
  width: '25px',
  url: 'svg/secondStep.svg',
  onClick: ()=>{},
};

wIcon.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
};

export default wIcon;
