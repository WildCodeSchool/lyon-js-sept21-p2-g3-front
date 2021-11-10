// import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import RecipeTile from './RecipeTile';

const SuggestRecipies = () => {
  const [recipeRandom, setRecipeRandom] = useState([]);

  const RandomIngredient = () => {
    const ingredients = [
      'courge',
      'tomate',
      'poulet',
      'chou',
      'riz',
      'haricots',
      'steak',
      'courgette',
      'ail',
      'flageolets',
    ];
    const RandomIndex = () => {
      return Math.floor(Math.random() * 10);
    };

    return ingredients[RandomIndex()];
  };

  const ingredient = RandomIngredient();
  const RandomRecipies = () => {
    axios

      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${process.env.REACT_APP_ID_EDAMAM}&app_key=${process.env.REACT_APP_KEY_EDAMAM}`
      )

      // Extract the DATA from the received response

      .then(
        (response) => {
          setRecipeRandom(response.data.hits);
        }

        // Use this data to update the state

        // setRecipeRandom(data.hits[0].setRecipeRandom);

        // data.hits contains all of the different recipes existing according to the input of the user
      );
  };

  useEffect(() => {
    RandomRecipies();
  }, [ingredient]);

  if (!recipeRandom) {
    return <CircularProgress />;
  }

  return (
    <div
      id="SuggestRecipies"
      className="flex flex-col justify-center items-center"
    >
      {recipeRandom.map((recipe) => {
        return (
          <RecipeTile
            key={recipe.recipe.uri}
            imgAlt={recipe.recipe.label}
            imgSrc={recipe.recipe.image}
            recipeId={recipe.recipe.uri}
          />
        );
      })}
    </div>
  );
};

export default SuggestRecipies;
