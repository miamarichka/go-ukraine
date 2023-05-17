import styled from 'styled-components';

export const ReviewContainer = styled.div`
// display: flex;
justify-content: space-evenly;
align-items: center;
vertical-align: middle;
margin-bottom: 40px;
`;

export const ReviewBox = styled.div`
display:flex;
gap:32px;
align-items: center;
padding: 32px 59px 32px 59px;
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
color: ${props => props.theme.colors.black};
`;

export const ProfileAvatar = styled.img`
width: 136px;
height: 136px;
border-radius: 50%;
margin: auto;
margin-bottom: 16px;
`;

export const ProfileName = styled.p`
margin-bottom: 4px;
`;

export const ProfileLocation = styled.p`
margin-bottom: 16px;
`;

export const ReviewTitle = styled.h3`
font-size: 24px;
font-weight: 600;
line-height: 33px;
margin-bottom: 14px;
`;

export const ReviewScope = styled.div`
margin-bottom: 14px;
`;

export const ReviewDescription = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 22px;
margin-bottom: 17px;
`;

export const ReadMore = styled.button`
background-color: transparent;
border: none;
color: ${props => props.theme.colors.white};
font-family: 'Inter', sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 32px;
margin-left: 300px;
`;

export const UserImg = styled.img`
height: 209px;
width: 212px;
`;

export const DescWrapper = styled.div`
width: 40%;
margin-right: 25px;
text-align: left;
`;
export const AvatarWrapper = styled.div`
width: 20%;
`;
