import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecipeTile = ({ key, imgSrc, imgAlt }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log(isFavorite);
    console.log(key);
  }, [isFavorite]);

  return (
    <div
      id="RecipeTile"
      className="flex justify-center drop-shadow-inner w-min rounded-3xl "
    >
      <Link to="/recipe:id">
        <div id="RecipeContainer" className=" w-72 rounded-3xl">
          <img src={imgSrc} alt={imgAlt} className="rounded-t-3xl" />
          <div id="RecipeTitleContainer" className="relative">
            <Link to="/favorites">
              <span
                className="flex items-center justify-center bg-recipeWhite absolute z-20 left-6 -top-10 w-16 h-16 rounded-full"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {' '}
                H{' '}
              </span>{' '}
            </Link>
            <Link to="/addtoplanning">
              <span className="flex items-center justify-center bg-recipeWhite absolute z-20 right-6 -top-10 w-16 h-16 rounded-full">
                {' '}
                H{' '}
              </span>{' '}
            </Link>
            <h3
              id="RecipeTitle"
              className="flex items-center justify-center h-16 bg-recipeWhite rounded-b-3xl text-title font-bold"
            >
              {' '}
              {imgAlt}{' '}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeTile;
