import React from 'react';
import RecipeTile from '../components/RecipeTile';
import SuggestRecipies from '../components/SuggestRecipies';

function Home({ recipes, search }) {
  if (!search) {
    return (
      <div className="flex-auto text-xl font-semibold justify-items-center text-center">
        <h1
          id="suggestions"
          className="p-2 my-2 border-t-4 border-b-4 border-background bg-third bg-opacity-70 text-background "
        >
          Suggestions du jour
        </h1>
        <SuggestRecipies />;
      </div>
    );
  }
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
