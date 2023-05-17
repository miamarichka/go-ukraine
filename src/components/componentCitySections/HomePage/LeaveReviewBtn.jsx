/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BtnStyled } from '../../../utils/buttonStyled';
import { ModalOverlay } from '../../ModalOverlay/ModalOverlay';
import { ReviewForm } from '../../forms/ReviewForm';
import { useAuth } from '../../../api/zustand/useAuth';

const LeaveReviewBtnStyled = styled(BtnStyled)`
margin-bottom: 57px;
`;

const NotificationReview = styled.p`
font-size: 20px;
text-align: center;
font-weight: 600;
`;

export const LeaveReviewBtn = () => {
  const { isLoggedIn } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);

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
  }, []);

  return (
    <>
      <LeaveReviewBtnStyled
        type="button"
        onClick={() => toggleModal()}

      >
        Leave a review
      </LeaveReviewBtnStyled>
      {isOpenModal && (
      <ModalOverlay
        onCloseModal={toggleModal}
      >
          {isLoggedIn
            ? <ReviewForm />
            : (
              <NotificationReview>
                Only users who has account can leave a review
              </NotificationReview>
            )}
      </ModalOverlay>
      )}
    </>
  );
};
