/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function wSpiner({ height, width, color }) {
  return (
    <div className="spiner-component">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

wSpiner.defaultProps = {
  height: 60,
  width: 60,
  color: 'white',
};


wSpiner.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};


export default wSpiner;
