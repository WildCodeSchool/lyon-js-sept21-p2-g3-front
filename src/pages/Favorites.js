import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';
import FavoritesContext from '../contexts/FavoritesContexts';
// import RecipeTile from '../components/RecipeTile';

function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const { favoritesId, getFavoritesId } = useContext(FavoritesContext);

  // const getFavorite = (favoriteId) => {
  //   return axios
  //     .get(
  //       ` https://api.edamam.com/api/recipes/v2/%23${favoriteId}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
  //     )
  //     .then((response) => response.data)
  //     .then((data) => data);
  // };

  const getFavorite = () => {
    axios
      .get(`${process.env.REACT_APP_URL_API_SERVER}/favorites`)
      .then((response) => {
        return response.data;
      })
      .then((data) => setFavoriteRecipes(data));
  };

  // useEffect(() => {
  //   Promise.all(
  //     favoritesId.map((id) => {
  //       return getFavorite(id);
  //     })
  //   ).then((favoritesObject) => setFavoriteRecipes(favoritesObject));
  // }, [favoritesId]);

  useEffect(() => {
    getFavorite();
  }, [favoritesId]);

  useEffect(() => getFavoritesId(), []);

  return (
    <div
      id="main"
      className="flex-auto justify-center text-xl font-semibold justify-items-center text-center"
    >
      <h1 className="p-2 border-b-4 border-l-4 border-r-4 border-background bg-background text-primary rounded-b-full">
        MY FAVORITES
      </h1>
      {favoriteRecipes.map((favorite) => {
        console.log('favorite from favoriteRecipes : ', favorite);
        return (
          <RecipeTile
            key={favorite.id_recipe}
            recipeId={`.#${favorite.id_recipe}`}
            imgSrc={favorite.image}
            imgAlt={favorite.label}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
