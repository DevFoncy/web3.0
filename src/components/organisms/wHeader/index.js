import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Button from '@mui/material/Button';

import WModalConnect from '../wModalConnect';

import { pathServer } from '../../../lib/shared/constants/Strings';
import { enableScrollingPage } from '../../../lib/util/Util';
import { COMPANY_NAME, useScrollBar } from '../../../lib/util/Company';

const wHeader = ({ className }) => {
  const [modalConnect, setModalConnect] = useState(false);

  useEffect(() => {
    if (useScrollBar) {
      setTimeout(() => {
        enableScrollingPage();
      }, 1500);
    }
  }, []);

  return (
    <header className={`header ${className}`}>
      <div className="content-wrapper">
        <div className="d-flex">
          <Link href="/">
            <img
              className="logo pointer"
              width="60"
              src={`${pathServer.PATH_IMG}company/logo.svg`}
              alt={COMPANY_NAME}
            />
          </Link>
        </div>
        <div className="d-flex">
          <ul className="nav-main m-auto">
            <li>Home</li>
            <li>Community</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
        </div>
        <nav className="nav full">
          <ul className="d-flex mt-auto mb-auto">
            <li className="ul__item " data-test="header-location-name">
              <Button
                variant="contained"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid white',
                  borderRadius: '6px',
                  fontSize: '.8rem',
                  textTransform: 'capitalize',
                }}
                onClick={() => setModalConnect(true)}
              >
                Connect your wallet
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <WModalConnect open={modalConnect} onClose={() => setModalConnect(false)} />
    </header>
  );
};

wHeader.displayName = 'wHeader';

wHeader.defaultProps = {
  className: '',
};

wHeader.propTypes = {
  className: PropTypes.string,
};

export default wHeader;
