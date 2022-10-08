import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const wModal = React.forwardRef(
  ({ children, open, center, onClose, classNames, ...props }, ref) => (
    <Modal
      ref={ref}
      open={open}
      animationDuration={0}
      center={center}
      onClose={onClose}
      classNames={classNames}
      {...props}
    >
      {children}
    </Modal>
  )
);

wModal.displayName = 'wModal';

wModal.defaultProps = {
  open: false,
  center: true,
  classNames: {
    overlay: 'customOverlay',
    modal: 'customModal',
  },
  onClose: () => {},
};

wModal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
  center: PropTypes.bool,
  onClose: PropTypes.func,
  classNames: PropTypes.object,
};

export default wModal;
