import React from 'react';
import ListOfProducts from '../components/ListOfProducts';

function ShoppingList() {
  return (
    <>
      <div className="flex-auto text-xl font-semibold justify-items-center text-center">
        <h1 className="text-3xl p-2">Mon panier</h1>

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🍖 BOUCHERIE 🍖
        </h2>

        <ListOfProducts />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🐟 POISSONERIE 🐟
        </h2>

        <ListOfProducts />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🥛 PRODUITS LAITIERS 🥛
        </h2>

        <ListOfProducts />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🍎 FRUITS 🍎
        </h2>

        <ListOfProducts />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🥕 LÉGUMES 🥕
        </h2>

        <ListOfProducts />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🧂 ÉPICERIES 🧂
        </h2>

        <ListOfProducts />

        <h2 className="p-2 my-2 border-t-4 border-b-4 border-red-200 bg-red bg-red-200 bg-opacity-60">
          🍹 BOISSONS 🍹
        </h2>

        <ListOfProducts />
      </div>
    </>
  );
}

export default ShoppingList;
