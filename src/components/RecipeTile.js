import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeTile = ({ recipeId, imgSrc, imgAlt }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const id = recipeId.split('#')[1];

  return (
    <div
      id="RecipeTile"
      className="flex justify-center drop-shadow-inner w-min rounded-3xl "
    >
      <div id="RecipeContainer" className=" w-72 rounded-3xl">
        <Link to="/recipe:id">
          <img src={imgSrc} alt={imgAlt} className="rounded-t-3xl" />{' '}
        </Link>
        <div id="RecipeTitleContainer" className="relative">
          <span
            className="flex items-center justify-center bg-recipeWhite absolute z-20 left-6 -top-10 w-16 h-16 rounded-full "
            onClick={() => {
              setIsFavorite(!isFavorite);
              axios.post(`http://localhost:5000/favorites/${id}`, {
                isfavorite: isFavorite,
              });
            }}
          >
            {' '}
            H{' '}
          </span>{' '}
          <Link to="/addtoplanning">
            <span className="flex items-center justify-center bg-recipeWhite absolute z-20 right-6 -top-10 w-16 h-16 rounded-full">
              {' '}
              H{' '}
            </span>{' '}
          </Link>
          <Link to="/recipe:id">
            <h3
              id="RecipeTitle"
              className="flex items-center justify-center h-16 bg-recipeWhite rounded-b-3xl text-title font-bold"
            >
              {' '}
              {imgAlt}{' '}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeTile;
