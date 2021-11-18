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

      .then((response) => {
        setRecipeRandom(response.data.hits);
      });
  };

  useEffect(() => {
    RandomRecipies();
  }, [ingredient]);

  if (!recipeRandom) {
    return <CircularProgress />;
  }

  return (
    <>
      <div
        id="SuggestRecipies"
        className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 lg:justify-items-center lg:mx-60"
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
      <div className="flex items-center justify-center bg-background text-primary text-xl h-20">
        <p className="text-center"> Make with ❤️ by Wild Code School </p>
      </div>
    </>
  );
};

export default SuggestRecipies;
