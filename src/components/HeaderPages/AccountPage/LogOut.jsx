import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnStyled } from '../../../utils/buttonStyled';
import { ButtonBox, ButtonLabel, LabelSpan } from './LogOut.styled';
import { useStore } from '../../../api/zustand/authStore';

export const LogOutPage = () => {
  const navigate = useNavigate();
  const logOut = useStore(state => state.logOut);

  const onClickHandler = () => {
    logOut();
    navigate('/');
  };

  return (
    <ButtonBox>
      <ButtonLabel htmlFor="button">
        After pushing
        {' '}
        <LabelSpan>Log Out</LabelSpan>
        {' '}
        button
        <br />
        you will be redirected on the the main page
      </ButtonLabel>
      <BtnStyled
        id="button"
        onClick={onClickHandler}
      >
        Log Out
      </BtnStyled>
    </ButtonBox>
  );
};
