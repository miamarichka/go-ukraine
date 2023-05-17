import styled from 'styled-components';

export const FooterWrapper = styled.div`
width: 100%;
`;

export const FooterYellowBlock = styled.div`
height: 160px;
width: 100%;
background-color: ${props => props.theme.colors.yellow};
display: flex;
flex-direction: column;
gap: 24px;
align-items: center;
`;

export const FooterBlueBlock = styled.div`
height: 160px;
width: 100%;
background-color: ${props => props.theme.colors.blue};
display: flex;
flex-direction: column;
gap: 32px;
align-items: center;
`;

export const FooterTitle = styled.h3`
font-family: 'Inter', sans-serif;;
font-size: 32px;
font-weight: 400;
line-height: 39px;
letter-spacing: 0em;
color: ${props => props.theme.colors.white};
margin-top: 32px;
`;

export const FooterMediaList = styled.ul`
display: flex;
gap: 48px;
margin-bottom: 17px;
`;

export const FooterMediaItem = styled.li`
height: 40px;
width: 40px;
`;

export const FooterTextList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 16px;
width: 334px;
margin-top: 15px;
`;

export const FooterTextItem = styled.li`
font-family: 'Inter', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
margin-right: 52px;
&:nth-child(3n) {
  margin-right: 0;
}
&:nth-child(5n) {
  margin-right: 0;
}
`;

export const FooterTeamSpan = styled.span`
font-family: 'Inter', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
margin-bottom: 32px;
`;
