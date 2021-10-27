import React from 'react';
import RecipeTile from '../components/RecipeTile';

function Home({ recipes }) {
  return (
    <div
      id="Home"
      className="flex flex-col justify-center items-center gap-10 pb-8"
    >
      <h1 className="text-center">Home</h1>
      {recipes.map((recipe) => {
        return (
          <RecipeTile
            key={recipe.uri}
            imgAlt={recipe.label}
            imgSrc={recipe.image}
          />
        );
      })}
    </div>
  );
}

export default Home;
