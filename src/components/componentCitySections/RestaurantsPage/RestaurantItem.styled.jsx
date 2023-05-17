import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Stars } from '../../Icons/Stars.svg';
import { ReactComponent as Favorite } from '../../Icons/Heart.svg';
import { MdFavorite} from "react-icons/md";

export const RestaurantBox = styled.div`
  display: flex;
  margin-bottom: 32px;
  background-color: #F5FAFF;
`;

export const RestaurantImage = styled.img`
  width: 331px;
  height: 331px;
  margin-right: 20px;
`;

export const FavoriteSvg = styled(Favorite)`
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
`;

export const FavoriteSelectedSvg = styled(MdFavorite)`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 34px;
  height: 33px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const RestaurantDetailsBox = styled.div`
  width: 75%;
  text-align: left;
`;

export const RestaurantCuisinesBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 32px;
  align-items: flex-end;
`;

export const RestaurantName = styled.h2`
font-size: 32px;
font-weight: 600;
line-height: 44px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 12px;
margin-top: 26px;
text-align: left;
`;

export const RestaurantDescription = styled.p`
margin-right: 160px;
display: block;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
margin-bottom: 20px;
`;

export const StarsSvg = styled(Stars)`
margin-left: 8px;
`;

export const ShortDescList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
margin-bottom: 22px;
`;

export const ShortDescItem = styled.li`
font-size: 20px;
font-weight: 400;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
`;

export const SpanPoint = styled.span`
display: inline-block;
width: 4px;
  height: 4px;
  background-color: ${props => props.theme.colors.black};
  border-radius: 50%;
  margin-bottom: 3px;
`;

export const MoreLink = styled(Link)`
color: ${props => props.theme.colors.black};
font-weight: 600;
`;

export const CuisinesList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 8px;
width: 209px;
justify-content: flex-start;
`;

export const CuisinesItem = styled.ul`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: ${props => props.theme.colors.black};
`;

export const CuisinesTitle = styled.h3`
font-size: 20px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0em;
text-align: left;
color: ${props => props.theme.colors.black};
margin-bottom: 10px;
`;
