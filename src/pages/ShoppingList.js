import React from 'react';
import ButchersShop from '../components/catIngredients.js/ButchersShop';
import FishShop from '../components/catIngredients.js/FishShop';
import DairyProducts from '../components/catIngredients.js/DairyProducts';
import Fruits from '../components/catIngredients.js/Fruits';
import Vegetables from '../components/catIngredients.js/Vegetables';
import Grocery from '../components/catIngredients.js/Grocery';
import Drinks from '../components/catIngredients.js/Drinks';

function ShoppingList() {
  return (
    <>
      <div className="flex-auto text-xl font-semibold justify-items-center text-center">
        <h1 className="text-3xl p-2">My shopping list</h1>

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🍖 BUTCHER'S SHOP 🍖
        </h2>

        <ButchersShop />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🐟 FISH SHOP 🐟
        </h2>

        <FishShop />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🥛 DAIRY PRODUCTS 🥛
        </h2>

        <DairyProducts />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🍎 FRUITS 🍎
        </h2>

        <Fruits />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🥕 VEGETABLES 🥕
        </h2>

        <Vegetables />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🧂 GROCERY STORES 🧂
        </h2>

        <Grocery />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🍹 DRINKS 🍹
        </h2>
        <Drinks />
      </div>
    </>
  );
}

export default ShoppingList;
