import React, { createContext, useState } from 'react';
import axios from 'axios';

const FavoritesContext = createContext();

export const FavoritesContextProviders = ({ children }) => {
  const [favoritesId, setFavoritesId] = useState([]);

  const getFavoritesId = () => {
    axios
      .get('http://localhost:5000/favorites')
      .then((response) => response.data)
      .then((data) => {
        setFavoritesId(data);
      });
  };

  return (
    <FavoritesContext.Provider
      value={{ favoritesid: favoritesId, getfavoritesid: getFavoritesId }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
