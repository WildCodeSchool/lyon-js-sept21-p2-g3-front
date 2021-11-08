import React from 'react';
import RecipeTile from '../components/RecipeTile';

function Home({ recipes }) {
  return (
    <div id="Home" className="flex flex-col justify-center items-center">
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
