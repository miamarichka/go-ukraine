import styled from 'styled-components';

export const AsideColumStyled1 = styled.div`
position: absolute;
  top: -17%;
  width: 79px;
  height: 550px;
  background-color: ${props => props.theme.colors.blue};;
`;
export const AsideColumStyled2 = styled.div`
position: absolute;
  bottom: 0;
  width: 79px;
  height: 550px;
  background-color: ${props => props.theme.colors.yellow};;
`;

export const AsideWrapperStyled = styled.div`
position: relative;
`;
