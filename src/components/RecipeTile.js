import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import moment from 'moment';
import DeleteForever from '@mui/icons-material/DeleteForever';
import FavoritesContext from '../contexts/FavoritesContexts';
import MyFoodAPI from '../MyFoodAPI';

const RecipeTile = ({
  recipeId,
  imgSrc,
  imgAlt,
  date,
  lunch,
  diner,
  isInPlanning,
  setDeleteFromPlanning,
  deleteFromPlanning,
}) => {
  const id = recipeId.split('#')[1];
  const { favoritesId, setFavoritesId } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(favoritesId.includes(id));

  const truncate = (str) => {
    const none = ' . . .';
    return str.length > 25 ? str.substring(0, 20) + none : str;
  };

  return (
    <div>
      <div
        id="RecipeTile"
        className="flex justify-center w-min rounded-3xl box-shadow my-4 lg:m-10"
      >
        <div
          id="RecipeContainer"
          className=" relative w-80 m-auto rounded-2xl pt-7 lg:w-64"
        >
          <Link to={`/recipe/${id}`}>
            {date ? (
              <div className=" absolute z-10 date flex flex-row justify-center bg-background rounded-t-2xl h-16 w-80 items-center -mt-8 lg:w-64">
                <h2 className="text-primary font-bold text-xl pl-2 lg:text-base">
                  {moment(date).format('dddd MMMM Do')}
                </h2>

                {lunch === 1 ? (
                  <span className="text-third text-3xl pl-4 lg:pl-5 lg:pr-3">
                    <WbSunnyIcon sx={{ fontSize: 40 }} />
                  </span>
                ) : (
                  ''
                )}

                {diner === 1 ? (
                  <span className="text-third text-3xl pl-4 pr-4 lg:pl-5 lg:pr-3">
                    <Brightness2Icon sx={{ fontSize: 40 }} />
                  </span>
                ) : (
                  ''
                )}
              </div>
            ) : (
              ' '
            )}
            <img
              src={imgSrc}
              alt={imgAlt}
              className="rounded-t-2xl w-80 -mt-7"
            />
          </Link>
          <div id="RecipeTitleContainer" className="relative">
            <div
              className="flex items-center justify-center bg-recipeWhite absolute z-20 left-5 -top-8 w-16 h-16 rounded-full "
              onClick={() => {
                setIsFavorite(!isFavorite);
                if (!isFavorite) {
                  MyFoodAPI.post(`/favorites/${id}`, {
                    image: imgSrc,
                    label: imgAlt,
                  }).then(() => {
                    setFavoritesId([...favoritesId, id]);
                    console.log('favoritesId : ', favoritesId);
                  });
                } else {
                  MyFoodAPI.delete(`/favorites/${id}`).then(() => {
                    const newFavoritesId = favoritesId.filter((i) => i !== id);
                    setFavoritesId(newFavoritesId);
                  });
                }
              }}
            >
              {' '}
              {isFavorite ? (
                <FavoriteIcon sx={{ fontSize: 45, color: '#DD7230' }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: 45, color: '#DD7230' }} />
              )}{' '}
            </div>{' '}
            {isInPlanning ? (
              <div className="flex items-center justify-center bg-recipeWhite absolute z-20 right-5 -top-8 w-16 h-16 rounded-full">
                <button
                  type="button"
                  onClick={() => {
                    console.log('deleted!');
                    MyFoodAPI.delete('/planning', {
                      data: {
                        id_recipe: recipeId,
                        date,
                        lunch,
                        diner,
                      },
                    }).then(() => setDeleteFromPlanning(!deleteFromPlanning));
                  }}
                  alt={imgAlt}
                >
                  {' '}
                  <DeleteForever sx={{ fontSize: 45, color: '#DD7230' }} />
                </button>
              </div>
            ) : (
              <Link to={`/addtoplanning/${id}`}>
                <div className="flex items-center justify-center bg-recipeWhite absolute z-20 right-5 -top-8 w-16 h-16 rounded-full">
                  <AddBoxIcon sx={{ fontSize: 45, color: '#DD7230' }} />
                </div>{' '}
              </Link>
            )}
            <div className="flex items-center justify-center h-20 bg-recipeWhite rounded-b-2xl text-primary font-bold">
              <Link to={`/recipe/${id}`}>
                <h3 id="RecipeTitle" className="mt-2 text-lg ">
                  {truncate(imgAlt)}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeTile;
