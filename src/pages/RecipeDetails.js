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
      <div id="page" className="flex flex-col gap-2 items-center pb-20">
        <div
          id="share-like-addToPlanning"
          className="flex flex-col gap-2 fixed top-1/4 right-2 opacity-100 z-50"
        >
          <div
            className="flex items-center justify-center bg-recipeWhite z-20 left-5 -top-8 w-16 h-16 rounded-full"
            onClick={() => {
              setIsFavorite(!isFavorite);
              if (!isFavorite) {
                MyFoodAPI.post(`/favorites/${id}`, {
                  image: recipe.image,
                  label: recipe.label,
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
          className="w-screen opacity-80"
          src={recipe.image}
          alt={recipe.label}
        />
        <h2 className="text-lg text-primary bg-background font-bold text-center mx-3 py-4 px-24 rounded-2xl">
          {recipe.label}
        </h2>
        <ul className="grid grid-cols-2 w-screen gap-2 ml-4 mt-4 pb-6">
          {recipe.ingredients.map((ingredient) => {
            return (
              <li className="flex flex-row gap-2 text-base mx-4 my-1 font-bold">
                <Avatar src={ingredient.image} alt={ingredient.food} />
                {`${ingredient.food}`}
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
