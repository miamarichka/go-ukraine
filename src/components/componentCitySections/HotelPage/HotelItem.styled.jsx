import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Stars } from '../../Icons/Stars.svg';
import { ReactComponent as Wifi } from '../../Icons/Wifi.svg';
import { ReactComponent as Location } from '../../Icons/Location.svg';

export const HotelBox = styled.div`
display: flex;
margin-bottom: 32px;
background-color: #F5FAFF;
justify-content: space-between;
height: 331px;
`;

export const ImageWrapper = styled.div`
width: 331px;
height: 331px;
margin-right: 20px;
position: relative;
`;

export const HotelImage = styled.img`
width: 100%;
height: 100%;
`;

export const HotelDetailsBox = styled.div`
width: 650px;
margin-right: 81px;
text-align: left;
`;

export const HotelPriceBox = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
padding: 10px;
font-size: 18px;
font-weight: bold;
margin: 64px 72px 64px 0px;
`;

export const TextSvgBox = styled.div`
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 24px;
`;

export const HotelName = styled.h2`
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 12px;
margin-top: 26px;
text-align: left;
`;

export const HotelDescription = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
margin-bottom: 24px;
`;

export const WifiSvg = styled(Wifi)`
margin-right: 16px;
`;
export const LocationSvg = styled(Location)`
margin-right: 16px;
`;

export const StarsSvg = styled(Stars)`
margin-left: 8px;
`;

export const ViewDealLink = styled(Link)`
display: block;
text-align: center;
padding: 17px 69px 17px 69px;
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

export const Price = styled.p`
font-size: 48px;
font-weight: 600;
line-height: 66px;
letter-spacing: 0em;
text-align: left;
`;

export const LocationLink = styled(Link)`
font-family: MacPaw Fixel;
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: ${props => props.theme.colors.black};
`;

export const Currency = styled.p`
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
`;

export const PriceWrapper = styled.div`
display: flex;
vertical-align: middle;
align-items: center;
gap: 10px;
`;
