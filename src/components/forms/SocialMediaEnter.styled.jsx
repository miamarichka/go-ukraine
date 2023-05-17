import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 48px;
`;

export const ButtonMedia = styled.div`
background-color: ${props => props.theme.colors.white};
border: none;
width: 72px;
height: 72px;
`;
