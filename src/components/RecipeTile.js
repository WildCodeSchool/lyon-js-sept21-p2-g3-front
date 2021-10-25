import React from 'react';
import { Link } from 'react-router-dom';

const RecipeTile = ({ imgSrc, imgAlt }) => {
  return (
    <div
      id="RecipeTile"
      className="flex justify-center drop-shadow-inner w-min rounded-3xl "
    >
      <Link to="/recipe:id">
        <div id="RecipeContainer" className=" w-72 rounded-3xl">
          <img src={imgSrc} alt={imgAlt} className="rounded-t-3xl" />
          <h3
            id="RecipeTitle"
            className="flex items-center justify-center h-16 bg-recipeWhite rounded-b-3xl text-title font-bold"
          >
            {' '}
            {imgAlt}{' '}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default RecipeTile;
