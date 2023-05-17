import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UpperLinkStyled = styled(NavLink)`
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: ${props => props.theme.colors.gray};
&.active{
font-weight: 600;
color: ${props => props.theme.colors.black};
border-bottom: 1px solid;
}
`;

export const UpperLinkStyledBox = styled.div`
margin-bottom: 32px;
`;
