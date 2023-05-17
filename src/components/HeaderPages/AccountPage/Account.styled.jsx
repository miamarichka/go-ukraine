import styled from 'styled-components';

export const BackButton = styled.button`
background-color: transparent;
border:none;
`;

export const ProfileImg = styled.img`
width: 225px;
height: 225px;
border-radius: 50%;
margin: auto;
margin-bottom: 16px;
border: 4px solid transparent;
background-image: linear-gradient(to top,
    ${props => props.theme.colors.yellow} 50%, 
    ${props => props.theme.colors.blue} 50%);
background-origin: border-box;
padding: 4px;
`;

export const TitleWrapper = styled.div`
display: flex;
justify-content: flex-start;
gap: 540px;
`;

export const TitleAccount = styled.h1`
font-size: 56px;
font-weight: 400;
line-height: 77px;
letter-spacing: 0em;
text-align: center;
`;

export const ImgNameWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 64px;
`;

export const UserNameText = styled.p`
display: block;
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
`;

export const LabelImg = styled.label`
  display: inline-block;
  background-color:${props => props.theme.colors.blue};
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 20px;
`;
