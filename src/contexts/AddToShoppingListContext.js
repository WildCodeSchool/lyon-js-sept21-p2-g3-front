import React, { createContext, useState } from 'react';
import MyFoodAPI from '../MyFoodAPI';

const AddToShoppingListContext = createContext();

export const AddToShoppingListContextProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  const getShoppingList = () => {
    MyFoodAPI.get('/shopping-list')
      .then((response) => response.data)
      .then((data) => {
        setShoppingList(data);
        console.log(shoppingList);
      });
  };

  console.log('shoppingList', shoppingList);

  return (
    <AddToShoppingListContext.Provider
      value={{ shoppingList, getShoppingList, setShoppingList }}
    >
      {children}
    </AddToShoppingListContext.Provider>
  );
};

export default AddToShoppingListContext;
