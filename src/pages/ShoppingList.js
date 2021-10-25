import React from 'react';
import IngredientList from '../components/IngredientList';

function ShoppingList() {
  return (
    <>
      <div className="flex-auto text-xl font-semibold justify-items-center text-center">
        <h1 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          My shopping list
        </h1>

        <IngredientList />
      </div>
    </>
  );
}

export default ShoppingList;
