import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';

const RecipeTile = ({ imgSrc, imgAlt }) => {
  return (
    <div>
      <div
        id="RecipeTile"
        className="flex justify-center w-min rounded-3xl shadow-xl"
      >
        <Link to="/recipe:id">
          <div id="RecipeContainer" className=" w-80 m-auto rounded-2xl pt-7">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="rounded-t-2xl w-80 opacity-80"
            />
            <div id="RecipeTitleContainer" className="relative">
              <Link to="/favorites">
                <div className="flex items-center justify-center bg-recipeWhite absolute z-20 left-5 -top-8 w-16 h-16 rounded-full">
                  {' '}
                  <FavoriteBorderIcon
                    sx={{ fontSize: 45, color: '#DD7230' }}
                  />{' '}
                </div>{' '}
              </Link>
              <Link to="/addtoplanning">
                <span className="flex items-center justify-center bg-recipeWhite absolute z-20 right-5 -top-8 w-16 h-16 rounded-full">
                  {' '}
                  <AddBoxIcon sx={{ fontSize: 45, color: '#DD7230' }} />{' '}
                </span>{' '}
              </Link>
              <div className="flex items-center justify-center h-20 bg-recipeWhite rounded-b-2xl text-primary font-bold">
                <h3 id="RecipeTitle"> {imgAlt} </h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RecipeTile;
