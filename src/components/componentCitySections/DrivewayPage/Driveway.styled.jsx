import styled from 'styled-components';
import { ReactComponent as MapDrive } from '../../Icons/MapDrive.svg';

export const DriveWayTitle = styled.p`
font-family: MacPaw Fixel;
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 90px;
`;

export const DrivewayLink = styled.a`
font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: ${props => props.theme.colors.black};
`;

export const DrivewayWrapper = styled.div`
height: 40px;
width: 840px;
border-radius: 10px;
border: 2px solid ${props => props.theme.colors.black};
display: flex;
justify-content: space-between;
padding: 30px;
align-items: center;
margin-bottom: 108px;
`;

export const DrivewayBox = styled.div`
`;

export const MapDriveSvg = styled(MapDrive)`
margin-right: 24px;
`;

export const TransportTitle = styled.p`
font-size: 32px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 56px;
`;

export const DrivewayPageWrapper = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

export const TransportPicture = styled.img`
height: 363px;
width: 710px;
`;

export const TransportDescriprion = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
width: 40%;
`;

export const TransportBox = styled.div`
display: flex;
gap: 24px;
justify-content: space-between;
margin-bottom : 96px;
&.revert-box{
align-items: flex-end;
margin-bottom : 126px;
}
`;
