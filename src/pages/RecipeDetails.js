import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

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
    <div>
      <h2> {recipe.label} </h2>
      <img src={recipe.image} alt={recipe.label} />
      <ul>
        {recipe.ingredients.map((ingredient) => {
          return <li> {ingredient.food} </li>;
        })}
      </ul>
      <a href={recipe.url}> Voir la Recette détaillée </a>
    </div>
  );
};

export default RecipeDetails;
