import React from 'react';
import { NavLinkItemAccount } from './NavLinkItem';
import { NavigationWrapper } from './AccountInnerNavigation.styled';

export const AccountInnerNavigation = () => (
  <NavigationWrapper>
    <NavLinkItemAccount
      to="editprofile"
      element={<div>Edit Profile</div>}
    />
    <NavLinkItemAccount
      to="reviews"
      element={<div>Reviews</div>}
    />
    <NavLinkItemAccount
      to="logout"
      element={<div>Log Out</div>}
    />
  </NavigationWrapper>
);
