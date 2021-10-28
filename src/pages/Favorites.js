import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';
// import RecipeTile from '../components/RecipeTile';

function Favorites() {
  const [favoritesId, setFavoritesId] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const getFavoritesId = () => {
    axios
      .get('http://localhost:5000/favorites')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setFavoritesId(data);
        console.log(favoritesId);
      });
  };

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

  return (
    <div>
      <h1> Favorites</h1>
      <button type="button" onClick={getFavoritesId}>
        {' '}
        Get Favorites Id{' '}
      </button>
      {favoriteRecipes.map((favorite) => {
        console.log('favorite : ', favorite);
        return (
          <RecipeTile
            key={favorite.recipe.uri}
            imgSrc={favorite.recipe.image}
            imgAlt={favorite.recipe.label}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
