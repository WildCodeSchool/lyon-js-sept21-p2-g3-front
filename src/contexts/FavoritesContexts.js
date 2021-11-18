import React, { createContext, useState } from 'react';
import MyFoodAPI from '../MyFoodAPI';

const FavoritesContext = createContext();

export const FavoritesContextProviders = ({ children }) => {
  const [favoritesId, setFavoritesId] = useState([]);

  const getFavoritesId = () => {
    MyFoodAPI.get(`/favorites`)
      .then((response) => response.data)
      .then((data) => {
        data.map((recipe) =>
          setFavoritesId([...favoritesId, recipe.id_recipe])
        );
        // setFavoritesId(data);
      });
  };

  return (
    <FavoritesContext.Provider
      value={{ favoritesId, getFavoritesId, setFavoritesId }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
