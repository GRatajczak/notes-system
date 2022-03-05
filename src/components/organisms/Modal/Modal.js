import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { StyledWrapper } from './Modal.styles';
import Button from 'components/atoms/Button/Button';

const modalContainer = document.getElementById('modal-container');

function Modal({ isOpen, handleClose, children }) {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => modalContainer.removeChild(modalNode);
  }, [modalNode]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <StyledWrapper>
      {children}
      test <Button onClick={handleClose}>Close</Button>
    </StyledWrapper>,
    modalNode
  );
}

Modal.propTypes = {
  isOpen: PropTypes.Boolean,
};

export default Modal;
