import React, { createContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesContextProviders = ({ children }) => {
  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
};

export default FavoritesContext;
