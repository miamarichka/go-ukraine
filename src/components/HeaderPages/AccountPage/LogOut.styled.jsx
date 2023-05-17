import styled from 'styled-components';

export const ButtonBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 30px;
margin-bottom: 40px;
`;

export const ButtonLabel = styled.label`
font-family: 'Fixel-Regular', sans-serif;
font-size: 22px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
`;

export const LabelSpan = styled.span`
color: ${props => props.theme.colors.blue}
`;
