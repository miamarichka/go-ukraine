import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkItemStyled = styled(NavLink)`
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: ${props => props.theme.colors.gray};
&.active{
font-weight: 600;
color: ${props => props.theme.colors.blue};
}
`;

export const NavLinkItemAccount = ({ to, element }) => (
  <NavLinkItemStyled
    to={to}
  >
    {element}

  </NavLinkItemStyled>
);

NavLinkItemAccount.propTypes = {
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  element: PropTypes.element,
};
