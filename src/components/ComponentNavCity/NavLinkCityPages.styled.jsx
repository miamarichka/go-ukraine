import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavCategoryBox = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 90px;
`;

export const NavLinkStyled = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
height: 72px;
width: 212px;
border-radius: 5px;
background-color: ${props => props.theme.colors.white};
color: ${props => props.theme.colors.gray};
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
border: 2px solid #4E4E4E;
&.active{
background-color: ${props => props.theme.colors.blue};
color: ${props => props.theme.colors.white};
border: none;
}
`;
