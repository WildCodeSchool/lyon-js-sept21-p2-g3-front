import React from 'react';
import RecipeTile from '../components/RecipeTile';
import SuggestRecipies from '../components/SuggestRecipies';

function Home({ recipes, search }) {
  if (!search) {
    return (
      <div className="flex-auto text-xl font-semibold justify-items-center text-center">
        <h1
          id="suggestions"
          className="p-2 border-b-4 border-l-4 border-r-4 border-background bg-background text-primary rounded-b-full"
        >
          MY DAILY SUGGESTIONS
        </h1>
        <SuggestRecipies />;
      </div>
    );
  }
  return (
    <div id="Home" className="flex flex-col justify-center items-center pb-20">
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
