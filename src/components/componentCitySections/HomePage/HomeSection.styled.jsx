import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeTitle = styled.h2`
font-size: 48px;
font-weight: 600;
line-height: 66px;
letter-spacing: 0em;
text-align: right;
margin-right: 0px;
margin-left: 355px;
margin-bottom: 56px;
`;

export const HomeDescription = styled.p`
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
margin-right: 355px;
margin-bottom: 108px;
width: 60%;
`;

export const ReviewSection = styled.div`
text-align: center;
`;

export const ReviewSectionTextWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 1155px;
margin: 120px 143px 60px 90px;
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
color: ${props => props.theme.colors.black};
`;

export const StyledLink = styled(Link)`
color: ${props => props.theme.colors.black};
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
`;
