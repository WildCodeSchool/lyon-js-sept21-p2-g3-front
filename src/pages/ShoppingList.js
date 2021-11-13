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
      <div className="flex-auto text-xl font-semibold justify-items-center text-center pb-10">
        <h1 className="p-2 border-b-4 border-l-4 border-r-4 border-background bg-background text-primary rounded-b-full mb-4">
          MY SHOPPING LIST
        </h1>
        <IngredientList />
      </div>
    </>
  );
}

export default ShoppingList;
