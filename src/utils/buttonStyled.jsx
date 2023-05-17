import styled from 'styled-components';

export const BtnStyled = styled.button`
width: 213px;
height: 56px;
background-color: ${props => props.theme.colors.blue};
font-size:16px;
font-weight:600;
line-height: 22.08px;
border-radius: 5px;
color: ${props => props.theme.colors.white};
border:none;
&:hover,
&:focus {
    transform: scale(1.1);
  }
`;
