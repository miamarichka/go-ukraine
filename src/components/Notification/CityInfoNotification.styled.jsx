import { Link} from 'react-router-dom';
import styled from 'styled-components';
import { Backdrop } from '../ModalOverlay/ModalOverlay.styled';

export const NotificWrapper = styled.div`
  text-align: center;
  font-size: 46px;
  font-weight: 600;
`;

export const CityLink = styled(Link)`
  display: block;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  line-height: 77px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.colors.blue};
  &:hover,
  &:focus {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledBackDrop = styled(Backdrop)`
   background: linear-gradient(to bottom, rgba(2, 90, 187, 0.85), rgba(2, 90, 187, 0.85)) top, 
              linear-gradient(to bottom, rgba(252, 216, 0, 0.85), rgba(252, 216, 0, 0.85)) bottom;
  background-size: 100% 50%;
  background-repeat: no-repeat;
`;