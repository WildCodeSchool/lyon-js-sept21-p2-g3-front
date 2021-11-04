import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoritesContext from '../contexts/FavoritesContexts';
import MyFoodAPI from '../MyFoodAPI';

const RecipeTile = ({ recipeId, imgSrc, imgAlt }) => {
  const id = recipeId.split('#')[1];
  const { favoritesId, getFavoritesId } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(favoritesId.includes(id));

  return (
    <div>
      <div
        id="RecipeTile"
        className="flex justify-center w-min rounded-3xl shadow-xl"
      >
        <div id="RecipeContainer" className=" w-80 m-auto rounded-2xl pt-7">
          <Link to="/recipe:id">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="rounded-t-2xl w-80 opacity-80"
            />
          </Link>
          <div id="RecipeTitleContainer" className="relative">
            <div
              className="flex items-center justify-center bg-recipeWhite absolute z-20 left-5 -top-8 w-16 h-16 rounded-full"
              onClick={() => {
                setIsFavorite(!isFavorite);
                MyFoodAPI.post(`/favorites/${id}`, {
                  isfavorite: isFavorite,
                }).then(getFavoritesId());
              }}
            >
              {' '}
              {isFavorite ? (
                <FavoriteIcon sx={{ fontSize: 45, color: '#DD7230' }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 45, color: '#DD7230' }} />
              )}{' '}
            </div>{' '}
            <Link to="/addtoplanning">
              <span className="flex items-center justify-center bg-recipeWhite absolute z-20 right-5 -top-8 w-16 h-16 rounded-full">
                {' '}
                <AddBoxIcon sx={{ fontSize: 45, color: '#DD7230' }} />{' '}
              </span>{' '}
            </Link>
            <div className="flex items-center justify-center h-20 bg-recipeWhite rounded-b-2xl text-primary font-bold">
              <Link to="/recipe:id">
                <h3 id="RecipeTitle"> {imgAlt} </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeTile;
