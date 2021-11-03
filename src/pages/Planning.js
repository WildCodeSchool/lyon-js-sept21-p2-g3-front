/* eslint-disable */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';

const Planning = () => {
  const [midDayId, setMidDay] = useState(
    'recipe_0f6199b0c6a6283e57cf42056aaf6f1f'
  );
  const [nightId, setNight] = useState(
    'recipe_0f6199b0c6a6283e57cf42056aaf6f1f'
  );

  const [midDayRecipe, setMidDayRecipe] = useState({});
  const [nightRecipe, setNightRecipe] = useState({});
  const [selectedDay, setSelectedDay] = useState(false);
  const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const [recipies, setRecipies] = useState([]);

  const request = (id, set) => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/#${id}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
      )
      .then((response) => response.data)
      .then((data) => {
        set(data);
      });
  };

  useEffect(() => {
    if (selectedDay === true) {
      Promise.all(
        request(midDayId, setMidDayRecipe).then(
          request(nightId, setNightRecipe)
        )
      ).then(setRecipies[(midDayRecipe, nightRecipe)]);
    }
  }, [selectedDay]);

  return (
    <>
      <div className="grid justify-items-center">
        <ul className="flex flex-row space-x-3 pt-7">
          {day.map((day) => (
            <li
              className=" border-2 rounded-full h-8 w-8 flex items-center justify-center "
              onClick={() => {
                setSelectedDay(!selectedDay);
              }}
            >
              {day}
            </li>
          ))}
        </ul>
        {recipies.map((recipe) => {
          <RecipeTile
            imgSrc={recipe.recipe.image}
            imgAlt={recipe.recipe.label}
          />;
        })}
      </div>
    </>
  );
};

export default Planning;
