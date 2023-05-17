import styled from 'styled-components';
import { Container } from '../../../utils/Container.styled';

export const SavedContainer = styled(Container)`
  text-align: center;
`;

export const TitleWrapper = styled.div`
display: flex;
justify-content: flex-start;
gap: 540px;
margin-bottom: 70px;
`;

export const PageTitle = styled.p`
  font-family: MacPaw Fixel;
  font-size: 56px;
  font-weight: 600;
  line-height: 77px;
  letter-spacing: 0em;
  text-align: center;
`;

export const CitySelect = styled.select`
  height: 56px;
  width: 449px;
  left: 496px;
  top: 298px;
  border-radius: 5px;
  padding: 16px 20px 16px 20px;
  justify: space-between;
  font-family: MacPaw Fixel;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 58px;
`;