import React, { createContext, useState } from 'react';
import MyFoodAPI from '../MyFoodAPI';

const FavoritesContext = createContext();

export const FavoritesContextProviders = ({ children }) => {
  const [favoritesId, setFavoritesId] = useState([]);

  const getFavoritesId = () => {
    MyFoodAPI.get(`/favorites`)
      .then((response) => response.data)
      .then((data) => {
        setFavoritesId(data);
      });
  };

  return (
    <FavoritesContext.Provider value={{ favoritesId, getFavoritesId }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
