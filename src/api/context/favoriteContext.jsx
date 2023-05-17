import React, { createContext, useEffect, useState } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favoriteItems, setFavoriteItems] = useState(storedFavorites);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addFavoriteItem = (item) => {
    setFavoriteItems((prevItems) => [...prevItems, item]);
  };

  const removeFavoriteItem = (itemId, category) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter(
        (item) => item.category === category && item.id !== itemId
      )
    );
  };

  const isItemFavorite = (itemId) => {
    return favoriteItems.includes(itemId);
  };

  const favoriteContextValue = {
    favoriteItems: favoriteItems || [],
    addFavoriteItem,
    removeFavoriteItem,
    isItemFavorite,
  };
console.log(favoriteItems)
  return (
    <FavoriteContext.Provider value={favoriteContextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;