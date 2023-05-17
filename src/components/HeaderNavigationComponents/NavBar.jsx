/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from './NavLinkHeader';
import { GoUkraineNav } from './GoUkraine';
import { ButtonNav } from './ButtonNav';
import { SavedNav } from './SavedNav';
import { AccountNav } from './AccountNav';
import {
  NavBarBox,
  LogoWrapper,
  IconsWrapper,
  SphereSvg,
} from './NavBar.styled';
import { Container } from '../../utils/Container.styled';
import { useAuth } from '../../api/zustand/useAuth';

export const NavBar = ({ onLoginClick }) => {
  const { isLoggedIn, isHasAccount } = useAuth();

  return (
    <nav
      className="navbar"
    >
      <Container>
        <NavBarBox className="navbar-box">
          <LogoWrapper>
            <NavItem to="/" element={<GoUkraineNav />} />
          </LogoWrapper>
          <IconsWrapper>
            <SphereSvg />
            {isLoggedIn
              ? (
                <>
                  <NavItem to="/saved" element={<SavedNav />} />
                  <NavItem
                    to="/account"
                    element={<AccountNav />}
                    className="account"
                  />
                </>
              ) : (
                <ButtonNav
                  buttonName={isHasAccount ? 'Log In' : 'Sign Up'}
                  onClick={onLoginClick}
                />
              )}
          </IconsWrapper>
        </NavBarBox>
      </Container>
    </nav>
  );
};

NavBar.propTypes = {
  onLoginClick: PropTypes.func,
};
