import React, { useState } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';

function Home() {
  const [label, setLabel] = useState();
  const [imgSrc, setimgSrc] = useState();
  const getRecipe = () => {
    axios

      .get(
        'https://api.edamam.com/api/recipes/v2?type=public&q=lasagne&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9'
      )

      // Extract the DATA from the received response

      .then((response) => response.data)

      // Use this data to update the state

      .then((data) => {
        console.log(data.hits[0].recipe.label);
        setLabel(data.hits[0].recipe.label);
        setimgSrc(data.hits[0].recipe.image);
      });
  };

  return (
    <div
      id="Home"
      className="flex flex-col justify-center items-center gap-10 bg-primary"
    >
      <h1 className="text-center">Home</h1>
      <button type="button" onClick={getRecipe}>
        {' '}
        New Recipe{' '}
      </button>
      <RecipeTile imgSrc={imgSrc} imgAlt={label} />
      <RecipeTile imgSrc="https://bit.ly/2GJFu5W" imgAlt="Salade Caesar" />
      <RecipeTile imgSrc="https://bit.ly/2GJFu5W" imgAlt="Salade Caesar" />
    </div>
  );
}

export default Home;
