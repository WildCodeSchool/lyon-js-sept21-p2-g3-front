import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Avatar, CircularProgress } from '@mui/material';

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
    <div className="pb-20">
      <img className="w-screen" src={recipe.image} alt={recipe.label} />
      <h2> {recipe.label} </h2>
      <ul className="flex flex-col gap-2 ml-2 mt-4">
        {recipe.ingredients.map((ingredient) => {
          return (
            <li className="flex flex-row gap-2">
              <Avatar src={ingredient.image} alt={ingredient.food} />{' '}
              {`${ingredient.food} ${ingredient.quantity} ${ingredient.measure}`}
            </li>
          );
        })}
      </ul>
      <a href={recipe.url}> Voir la Recette détaillée </a>
    </div>
  );
};

export default RecipeDetails;
