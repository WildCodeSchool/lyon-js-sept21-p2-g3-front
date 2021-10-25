/* eslint-disable */
import React, { useState } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';

function Home() {
  // construction of the arrays with the wanted informations from the api for the app
  const [recipes, setRecipes] = useState({
    labels: [],
    imgSrcs: [],
  });
  const getRecipe = () => {
    axios

      .get(
        'https://api.edamam.com/api/recipes/v2?type=public&q=lasagne&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9'
      )

      // Extract the DATA from the received response

      .then((response) => response.data)

      // Use this data to update the state

      .then((data) => {
        console.log(data);
        // console.log(data.hits[0].recipe.label);
        // console.log(data.hits.length);
        const newLabels = [];
        const newImgSrcs = [];
        for (
          let recipeIndex = 0;
          recipeIndex < data.hits.length;
          recipeIndex++
        ) {
          // data.hits contains all of the different recipes existing according to the input of the user
          newLabels.push(data.hits[recipeIndex].recipe.label);
          newImgSrcs.push(data.hits[recipeIndex].recipe.image);
          console.log(newLabels);
        }
        setRecipes({
          labels: newLabels,
          imgSrcs: newImgSrcs,
        });
      });
  };

  return (
    <div
      id="Home"
      className="flex flex-col justify-center items-center gap-10 bg-primary flex-grow pb-8"
    >
      <h1 className="text-center">Home</h1>
      <button type="button" onClick={getRecipe}>
        {' '}
        New Recipe{' '}
      </button>
      {recipes.labels.map((recipe, index) => {
        return (
          <RecipeTile
            key={recipe}
            imgAlt={recipe}
            imgSrc={recipes.imgSrcs[index]}
          />
        );
      })}
    </div>
  );
}

export default Home;
