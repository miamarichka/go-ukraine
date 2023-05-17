import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BtnStyled } from '../../utils/buttonStyled';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { LoginForm } from '../forms/LoginForm';
import { SignUpForm } from '../forms/SignUpFrom';
import { useAuth } from '../../api/zustand/useAuth';

export const ButtonNav = ({ buttonName }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isHasAccount } = useAuth();

  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState);
  };

  const modalHandler = (e) => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', modalHandler);

    return () => {
      window.removeEventListener('keydown', modalHandler);
    };
  }, [isOpenModal]);

  return (
    <>
      <BtnStyled
        type="button"
        onClick={toggleModal}
      >
        {buttonName}
      </BtnStyled>
      {isOpenModal && (
        <ModalOverlay
          onCloseModal={toggleModal}
        >
          {isHasAccount ? <LoginForm /> : <SignUpForm />}
        </ModalOverlay>
      )}
    </>
  );
};

ButtonNav.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
