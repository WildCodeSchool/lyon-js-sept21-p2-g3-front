import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';
import FavoritesContext from '../contexts/FavoritesContexts';
// import RecipeTile from '../components/RecipeTile';

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const { favoritesId, getFavoritesId } = useContext(FavoritesContext);

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
      favoritesId.map((id) => {
        return getFavorite(id);
      })
    ).then((favoritesObject) => setFavoriteRecipes(favoritesObject));
  }, [favoritesId]);

  useEffect(() => getFavoritesId(), []);

  return (
    <div className="flex-auto text-xl font-semibold justify-items-center text-center pb-20">
      <h1 className="p-2 border-b-4 border-l-4 border-r-4 border-background bg-background text-primary rounded-b-full">
        MY FAVORITES
      </h1>
      <div id="Home" className="flex flex-col justify-center items-center">
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
    </div>
  );
}

export default Favorites;
