/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../Icons/Arrow-left.svg';
import { BackButton, ImgNameWrapper, LabelImg, ProfileImg, TitleAccount, TitleWrapper, UserNameText } from './Account.styled';
import { Container } from '../../../utils/Container.styled';
import { AccountInnerNavigation } from './AccountInnerNavigation';
import { Footer } from '../../Footer/Footer';
import { useAuth } from '../../../api/zustand/useAuth';
import { useStore } from '../../../api/zustand/authStore';

export const Account = () => {
  const { user, picture } = useAuth();
  const navigation = useNavigate();

  const uploadImg = useStore(state => state.uploadPicture);

  const inputUploadHandler = (e) => {
    if (e.target.files[0].type !== 'image/jpeg') {
      return;
    }

    uploadImg(e.target.files[0]);
  };

  return (
    <>
      <Container>
        <TitleWrapper>
          <BackButton onClick={() => navigation(-1)}>
            <ArrowLeft />
          </BackButton>
          <TitleAccount>Your Profile</TitleAccount>
        </TitleWrapper>
        <ImgNameWrapper>
          <ProfileImg src={picture || ''} alt="" accept="image/*" />
          <form action="">
            <input
              type="file"
              id="userFile"
              name="filename"
              onChange={inputUploadHandler}
              hidden
            />
            <LabelImg htmlFor="userFile">Choose image</LabelImg>
          </form>
          <UserNameText>{user.name}</UserNameText>
        </ImgNameWrapper>
        <AccountInnerNavigation />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
