import React from 'react';
import PropTypes from 'prop-types';

import { useConnect } from 'wagmi';
import Button from '@mui/material/Button';

import WModal from '../../molecules/wModal';

const wModalConnect = ({ open, onClose }) => {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();

  return (
    <WModal width={500} height={400} open={open} onClose={onClose}>
      <div className="ModalConnect">
        <h5 className="font-medium">Connect a wallet</h5>
        <div className="modal-connect-body">
          {connectors.map((connector) => (
            <Button
              style={{ fontSize: '10px' }}
              variant="outlined"
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
            >
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
            </Button>
          ))}
        </div>
        {error && <div className="error">{error.message}</div>}
        <div className="s-pt-1">
          <p>
            Wallets are provided by External Providers and by selecting you agree to Terms of those
            Providers. Your access to the wallet might be reliant on the External Provider being
            operational.
          </p>
        </div>
      </div>
    </WModal>
  );
};

wModalConnect.displayName = 'wModalConnect';

wModalConnect.defaultProps = {};

wModalConnect.propTypes = {
  className: PropTypes.string,
};

export default wModalConnect;
