import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';
import FavoritesContext from '../contexts/FavoritesContexts';
// import RecipeTile from '../components/RecipeTile';

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const { favoritesid, getfavoritesid } = useContext(FavoritesContext);

  const getFavorite = (favoriteId) => {
    return axios
      .get(
        ` https://api.edamam.com/api/recipes/v2/%23${favoriteId}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
      )
      .then((response) => response.data)
      .then((data) => data);
  };

  useEffect(() => {
    Promise.all(
      favoritesid.map((id) => {
        return getFavorite(id);
      })
    ).then((favoritesObject) => setFavoriteRecipes(favoritesObject));
  }, [favoritesid]);

  useEffect(() => getfavoritesid(), []);

  return (
    <div
      id="main"
      className="flex flex-col justify-center items-center gap-10 pb-8"
    >
      <h1> Favorites</h1>
      {favoriteRecipes.map((favorite) => {
        return (
          <RecipeTile
            key={favorite.recipe.uri}
            recipeId={favorite.recipe.uri}
            imgSrc={favorite.recipe.image}
            imgAlt={favorite.recipe.label}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
