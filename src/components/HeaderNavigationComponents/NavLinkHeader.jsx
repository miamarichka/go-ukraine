import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderNavLinkStyled = styled(NavLink)`
fill: ${props => props.theme.colors.white};
color: ${props => props.theme.colors.black};
&.active{
  color: ${props => props.theme.colors.white};
  fill: ${props => props.theme.colors.black};
}
`;

export const NavItem = ({ to, element }) => (
  <HeaderNavLinkStyled
    to={to}
    className="account"
  >
    {element}

  </HeaderNavLinkStyled>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  element: PropTypes.element.isRequired,
};
