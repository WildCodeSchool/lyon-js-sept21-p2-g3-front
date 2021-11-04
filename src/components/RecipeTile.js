import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';

const RecipeTile = ({ imgSrc, imgAlt, date, time }) => {
  return (
    <div>
      <Link to="/recipe:id">
        <div
          id="RecipeContainer"
          className=" relative w-80 m-auto rounded-2xl mt-7 box-shadow"
        >
          {date ? (
            <div className=" absolute z-10 date flex flex-row justify-center bg-background rounded-t-2xl h-16 w-80 items-center -mb-20 ">
              <h1 className="text-primary font-bold text-2xl pl-3"> {date}</h1>

              {time === 'midday' && (
                <span className="text-third text-3xl pl-7">
                  <WbSunnyIcon sx={{ fontSize: 40 }} />
                </span>
              )}

              {time === 'night' && (
                <span className="text-third text-3xl pl-7">
                  <Brightness2Icon sx={{ fontSize: 40 }} />
                </span>
              )}
            </div>
          ) : (
            ' '
          )}

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
  );
};

export default RecipeTile;
