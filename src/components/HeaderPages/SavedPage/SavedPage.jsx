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
  console.log(favoriteContext.addFavoriteItem);

  return (
    <FavoriteProvider>
      <SavedContainer>
        <TitleWrapper>
          <BackButton onClick={() => navigation(-1)}>
            <ArrowLeft />
          </BackButton>
          <PageTitle>Your Saves</PageTitle>
        </TitleWrapper>
        <CitySelect name='cities' id='cities'>
          {cities.map((city, index) => (
            <option key={city - index} value={city}>
              {city}
            </option>
          ))}
        </CitySelect>
        {!!favoriteContext.favoriteItems.length ? (
          <div>
            {favoriteContext.favoriteItems.map((item, index) => {
              if (item.category === "hotel") {
                const { name, location, image, price, deal, description, id } =
                  item;
                return (
                  <HotelItem
                    location={location}
                    name={name}
                    image={image}
                    price={price}
                    deal={deal}
                    description={description}
                    id={id}
                    key={id-index}
                  />
                );
                }
                if (item.category === 'restaurant') {
                    const { image, desc, name, id } = item;
                    return (
                      <RestaurantItem
                        image={image}
                        desc={desc}
                        name={name}
                        id={id}
                        key={id - index}
                      />
                    );
                }
            })}
          </div>
        ) : (
          <div>No items</div>
        )}
      </SavedContainer>
    </FavoriteProvider>
  );
};

export default SavedPage;
