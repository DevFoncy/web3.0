/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const wFormInput = ({ label, withIcon, ...props }) => (
  <TextField
    id="outlined-basic"
    fullWidth
    label={label}
    variant="standard"
    InputProps={{
      startAdornment: withIcon && (
        <InputAdornment position="end">
          <LocationSearchingIcon sx={{ color: 'white' }} />
        </InputAdornment>
      ),
      style: {
        color: 'white',
      },
    }}
    InputLabelProps={{
      style: { color: '#fff', paddingLeft: '5px', fontSize: '1rem' },
    }}
    size="small"
    sx={{ background: '#34353A', color: 'white', borderRadius: '4px' }}
    {...props}
  />
);
wFormInput.displayName = '';
wFormInput.defaultProps = {};
wFormInput.propTypes = {};
export default wFormInput;
