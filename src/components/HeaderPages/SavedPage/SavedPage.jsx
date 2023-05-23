/** @format */
import { useNavigate } from "react-router";
import { BackButton } from "../AccountPage/Account.styled";
import FavoriteContext, {
  FavoriteProvider,
} from "../../../api/context/favoriteContext";
import { ReactComponent as ArrowLeft } from "../../Icons/Arrow-left.svg";
import {
  CitySelect,
  PageTitle,
  SavedContainer,
  TitleWrapper,
} from "./SavedPage.styled";
import { useContext, useEffect } from "react";
import { HotelItem } from "../../componentCitySections/HotelPage/HotelItem";
import { RestaurantItem } from "../../componentCitySections/RestaurantsPage/RestaurantItem";
import { NotificationInfo } from "../../Notification/Notifications";

const cities = [
  "Kyiv",
  "Vinnytsia",
  "Lutsk",
  "Dnipro",
  "Donetsk",
  "Zhytomyr",
  "Uzhhorod",
  "Zaporizhia",
  "Ivano-Frankivsk",
  "Kyiv",
  "Kropyvnytskyi",
  "Luhansk",
  "Lviv",
  "Mykolaiv",
  "Odessa",
  "Poltava",
  "Rivne",
  "Sumy",
  "Ternopil",
  "Kharkiv",
  "Kherson",
  "Khmelnytskyi",
  "Cherkasy",
  "Chernivtsi",
  "Chernihiv",
  "Simferopol",
];

const SavedPage = () => {
  const navigation = useNavigate();
  const favoriteContext = useContext(FavoriteContext);

  return (
    <SavedContainer>
      <TitleWrapper>
        <BackButton onClick={() => navigation(-1)}>
          <ArrowLeft />
        </BackButton>
        <PageTitle>Your Saves</PageTitle>
      </TitleWrapper>
      <CitySelect name='cities' id='cities'>
        {cities.map((city, index) => (
          <option key={city + index} value={city}>
            {city}
          </option>
        ))}
      </CitySelect>
      {!!favoriteContext.favoriteItems.length ? (
        <div>
          {favoriteContext.favoriteItems.map((item) => {
            if (item.category === "hotels") {
              const {
                name,
                location,
                image,
                price,
                deal,
                description,
                id,
                category,
              } = item;
              return (
                <HotelItem
                  location={location}
                  name={name}
                  image={image}
                  price={price}
                  deal={deal}
                  description={description}
                  category={category}
                  id={id}
                  key={id + 1}
                />
              );
            }
            if (item.category === "restaurants") {
              const { image, desc, name, id, category } = item;
              return (
                <RestaurantItem
                  image={image}
                  desc={desc}
                  name={name}
                  category={category}
                  id={id}
                  key={id + 1}
                />
              );
            }
            return null;
          })}
        </div>
      ) : (
        <div>
          <NotificationInfo message={"You haven`t saved any items"} />
        </div>
      )}
    </SavedContainer>
  );
};

export default SavedPage;
