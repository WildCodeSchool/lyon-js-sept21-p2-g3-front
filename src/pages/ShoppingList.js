import React, { useContext, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import IngredientList from '../components/IngredientList';
import AddToShoppingListContext from '../contexts/AddToShoppingListContext';

function ShoppingList() {
  const { shoppingList, getShoppingList } = useContext(
    AddToShoppingListContext
  );

  useEffect(() => {
    getShoppingList();
  }, []);

  if (!shoppingList) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="flex-auto text-xl font-semibold justify-items-center text-center">
        <h1 className="p-2 my-2 border-t-4 border-b-4 border-background bg-third bg-opacity-70 text-background">
          My shopping list
        </h1>
        <IngredientList />
      </div>
    </>
  );
}

export default ShoppingList;
