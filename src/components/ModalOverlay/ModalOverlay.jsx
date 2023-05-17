/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, Modal, CloseSvg } from './ModalOverlay.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalOverlay = ({ onCloseModal, children }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (createPortal(
    <Backdrop
      onClick={handleBackdropClick}
    >
      <Modal>
        <CloseSvg onClick={onCloseModal} />
        {children}
      </Modal>
    </Backdrop>, modalRoot,
  )
  );
};

ModalOverlay.propTypes = {
  onCloseModal: PropTypes.func,
};
