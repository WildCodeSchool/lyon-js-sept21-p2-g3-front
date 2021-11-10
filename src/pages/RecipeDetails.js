import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
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
      <div id="page" className="flex flex-col gap-2 items-center pb-24">
        <div
          id="share-like-addToPlanning"
          className="flex flex-col fixed top-1/2 right-2"
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
          <div>
            <ShareIcon />
          </div>
        </div>
        <img className="w-screen" src={recipe.image} alt={recipe.label} />
        <h2> {recipe.label} </h2>
        <ul className="grid grid-cols-2 w-screen gap-2 ml-4 mt-4 pb-6">
          {recipe.ingredients.map((ingredient) => {
            return (
              <li className="flex flex-row gap-2">
                <Avatar src={ingredient.image} alt={ingredient.food} />{' '}
                {`${ingredient.food}`}
              </li>
            );
          })}
        </ul>
        <Button variant="contained" href={recipe.url}>
          {' '}
          Recette détaillée{' '}
        </Button>
      </div>
    </>
  );
};

export default RecipeDetails;
