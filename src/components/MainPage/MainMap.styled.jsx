/* eslint-disable no-console */
import styled from 'styled-components';

export const TextWrapper = styled.div` 
width: 810px;
height: 121px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`;

export const MainText = styled.h1`
font-weight: 600;
font-size: 56px;
line-height: 77.28px;
`;

export const SubText = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 33.12px;
color: ${props => props.theme.colors.gray};
`;

export const MapWrapper = styled.div`
width: 1400px;
`;

export const RegionList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  position: sticky;
`;

export const RegionItem = styled.li`
position: sticky;
transition: all .2s ease-in-out;
  &:hover{
    transform: scale(1.1);
    color: white;
    position: relative;
  }
  &.Lutsk{
   margin-left:104px;
   margin-top:82px;
  }
  &.Rivne {
   margin-left: -62px;
   margin-top: 82px;
  }
  &.Zhytomyr {
  margin-left: -32px;;
  margin-top: 108px;
  }
  &.Kyiv {
  margin-left: -28px;
  margin-top: 123px;
  }
  &.Chernihiv {
  margin-left: -95px;
  margin-top: 42px;
  }
  &.Sumy {
  margin-top: 42px;
  margin-left: -32px;
  }
  &.Lviv {
  margin-top: -139px;
  margin-left: 52px;
  }
  &.Ternopil {
  margin-left: -44px;
  margin-top: -106px;
  }
  &.Kmelnytskiy {
  margin-top: -134px;
  margin-left: -15px;
  }
  &.Vinnytsia {
  margin-left: -33px;
  margin-top: -70px;
  }
  &.Cherkasy {
  margin-left: -29px;
  margin-top: -104px;
  }
  &.Poltava {
  margin-left: -43px;
  margin-top: -130px;
  }
  &.Kharkiv {
  margin-left: -64px;
  margin-top: -119px;
  }
    &.Uzhhorod {
  margin-left: 20px;
  margin-top: -104px;
  }
    &.IvanoFransivsk {
  margin-top: -143px;
  margin-left: -64px;
  }
    &.Chernivtsi {
  margin-top: -69px;
  margin-left: -46px;
  }
    &.Kropyvnytskyi {
  margin-top: -121px;
  margin-left: 125px;
  }
    &.Dnipro {
  margin-top: -112px;
  margin-left: -58px;
  }
    &.Simfiropol {
  margin-left: -164px;
  margin-top: 49px;
  }
    &.Donetsk {
  margin-top: -116px;
  margin-left: -44px;
  }
    &.Luhansk {
  margin-top: -183px;
  margin-left: -74px;
  }
      &.Odesa {
  margin-left: 366px;
  margin-top: -124px;
  }
      &.Mykolayiv {
  margin-top: -124px;
  margin-left: -64px;
  }
      &.Kherson {
  margin-left: -326px;
  margin-top: -68px;
  }
      &.Zaporizhia {
  margin-top: -113px;
  margin-left: 55px;
  }
`;
