import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import MyFoodAPI from '../MyFoodAPI';
import RecipeTile from './RecipeTile';

const SuggestRecipies = () => {
  const [suggestions, setSuggestions] = useState();

  const getSuggestions = () => {
    MyFoodAPI.get('/suggestions')
      .then((results) => results.data)
      .then((data) => {
        setSuggestions(data);
      });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  if (!suggestions) {
    return <CircularProgress />;
  }

  return (
    <div
      id="SuggestRecipies"
      className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 lg:justify-items-center lg:mx-60"
    >
      {suggestions.map((recipe) => {
        return (
          <RecipeTile
            key={recipe.id_recipe}
            imgAlt={recipe.label}
            imgSrc={recipe.image}
            recipeId={`.#${recipe.id_recipe}`}
          />
        );
      })}
    </div>
  );
};

export default SuggestRecipies;
