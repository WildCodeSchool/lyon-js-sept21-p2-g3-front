import React from 'react';
import RecipeTile from '../components/RecipeTile';

function Home({ recipes }) {
  return (
    <div
      id="Home"
      className="flex flex-col justify-center items-center gap-10 pb-8"
    >
      <h1 className="text-center">Home</h1>
      {recipes.map((info) => {
        return (
          <RecipeTile
            key={info.recipe.uri}
            recipeId={info.recipe.uri}
            imgAlt={info.recipe.label}
            imgSrc={info.recipe.image}
          />
        );
      })}
    </div>
  );
}

export default Home;
