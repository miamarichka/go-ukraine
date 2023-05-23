/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/require-default-props */
import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, Modal, CloseSvg } from './ModalOverlay.styled';
import { useAuth } from '../../api/zustand/useAuth';
import { ColorRing } from 'react-loader-spinner';

const modalRoot = document.querySelector('#modal-root');

export const ModalOverlay = ({ onCloseModal, children }) => {
  const { isLoading } = useAuth();
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
        {isLoading ? <ColorRing/> : children}
      </Modal>
    </Backdrop>, modalRoot,
  )
  );
};

ModalOverlay.propTypes = {
  onCloseModal: PropTypes.func,
};
