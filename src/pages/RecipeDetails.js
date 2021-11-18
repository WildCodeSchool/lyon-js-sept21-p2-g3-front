import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Avatar, Button, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ShareIcon from '@mui/icons-material/Share';
import FavoritesContext from '../contexts/FavoritesContexts';
import MyFoodAPI from '../MyFoodAPI';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  console.log(recipe);

  const { favoritesId, setFavoritesId } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(favoritesId.includes(id));

  const location = useLocation();
  const url = `${process.env.REACT_APP_URL}${location.pathname}`;

  const getRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/%23${id}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
      )
      .then((result) => result.data)
      .then((data) => setRecipe(data.recipe));
  };

  useEffect(() => {
    getRecipe();
  }, []);

  if (!recipe) {
    return <CircularProgress />;
  }

  return (
    <>
      <div
        id="page"
        className="flex flex-col items-center justify-center pb-20"
      >
        <div
          id="share-like-addToPlanning"
          className="flex flex-col gap-2 fixed top-1/4 right-2 opacity-100 z-50"
        >
          <div
            className="flex items-center justify-center bg-recipeWhite z-20 left-5 -top-8 w-16 h-16 rounded-full"
            onClick={() => {
              setIsFavorite(!isFavorite);
              MyFoodAPI.post(`/favorites/${id}`, {
                isfavorite: isFavorite,
              }).then(() => {
                if (!isFavorite) {
                  setFavoritesId([...favoritesId, id]);
                } else {
                  const newFavoritesId = favoritesId.filter((i) => i !== id);
                  setFavoritesId(newFavoritesId);
                }
              });
            }}
          >
            {' '}
            {isFavorite ? (
              <FavoriteIcon sx={{ fontSize: 45, color: '#DD7230' }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: 45, color: '#DD7230' }} />
            )}{' '}
          </div>{' '}
          <Link to={`/addtoplanning/${id}`}>
            <div className="flex items-center justify-center bg-recipeWhite z-20 right-5 -top-8 w-16 h-16 rounded-full">
              {' '}
              <AddBoxIcon sx={{ fontSize: 45, color: '#DD7230' }} />{' '}
            </div>{' '}
          </Link>
          <div
            className="flex items-center justify-center bg-recipeWhite z-20 right-5 -top-8 w-16 h-16 rounded-full shareIconDiv"
            onClick={() => {
              navigator.clipboard.writeText(url);
              const infoBulle = document.querySelector('.infoBulleNotCopied');
              infoBulle.classList.remove('infoBulleNotCopied');
              infoBulle.classList.add('infoBulleCopied');
              setTimeout(() => {
                infoBulle.classList.remove('infoBulleNotCopied');
                infoBulle.classList.add('infoBulleCopied');
              }, 100);
            }}
          >
            <ShareIcon sx={{ fontSize: 45, color: '#DD7230' }} />
          </div>
          <div className="infoBulleNotCopied"> Lien copié ! </div>
        </div>
        <img
          className="w-screen lg:w-96 lg:h-96 lg:rounded-2xl lg:my-7 box-shadow"
          src={recipe.image}
          alt={recipe.label}
        />
        <h2 className="text-lg text-primary bg-background font-bold text-center mx-3 py-4 px-24 rounded-2xl mt-5 mb-5">
          {recipe.label}
        </h2>
        <ul className="grid grid-cols-2 align-middle w-screen mx-4 pb-6">
          {recipe.ingredients.map((ingredient) => {
            return (
              <li className="flex flex-row text-base my-3 font-bold lg:mx-56">
                <Avatar
                  src={ingredient.image}
                  alt={ingredient.food}
                  sx={{ margin: 1 }}
                />
                <h4 className="mt-3 ml-2">{`${ingredient.food}`}</h4>
              </li>
            );
          })}
        </ul>
        <Button
          variant="raised"
          sx={{
            color: '#FDB500',
            bgcolor: '#2E1F27',
            padding: 2,
            fontWeight: 'bold',
          }}
          href={recipe.url}
        >
          Recette détaillée
        </Button>
      </div>
    </>
  );
};

export default RecipeDetails;
