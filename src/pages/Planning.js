/* eslint-disable */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';
import Calendar from '../components/Calendar';

const Planning = () => {
  // const [midDayId, setMidDay] = useState(
  //   'recipe_0f6199b0c6a6283e57cf42056aaf6f1f'
  // );
  // const [nightId, setNight] = useState(
  //   'recipe_0f6199b0c6a6283e57cf42056aaf6f1f'
  // );

  // const [midDayRecipe, setMidDayRecipe] = useState({});
  // const [nightRecipe, setNightRecipe] = useState({});
  // const [selectedDay, setSelectedDay] = useState(false);

  // const [recipies, setRecipies] = useState([]);

  // const request = (id, set) => {
  //   axios
  //     .get(
  //       `https://api.edamam.com/api/recipes/v2/#${id}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
  //     )
  //     .then((response) => response.data)
  //     .then((data) => {
  //       set(data);
  //     });
  // };

  // useEffect(() => {
  //   if (selectedDay === true) {
  //     Promise.all(
  //       request(midDayId, setMidDayRecipe).then(
  //         request(nightId, setNightRecipe)
  //       )
  //     ).then(setRecipies[(midDayRecipe, nightRecipe)]);
  //   }
  // }, [selectedDay]);

  const listPlanning = [
    {
      date: 'Mercredi 03 2021',
      time: 'midday',
      title: 'lasagne',
      img: 'https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.jpg',
      id: 'recipe_0f6199b0c6a6283e57cf42056aaf6f1f',
    },
    {
      date: 'Mercredi 03 2021',
      time: 'night',
      title: 'lasagne',
      img: 'https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.jpg',
      id: 'recipe_0f6199b0c6a6283e57cf42056aaf6f1f',
    },
    {
      date: 'Jeudi 04 2021',
      time: 'midday',
      title: 'lasagne',
      img: 'https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.jpg',
      id: 'recipe_0f6199b0c6a6283e57cf42056aaf6f1f',
    },
    {
      date: 'Jeudi 04 2021',
      time: 'night',
      title: 'lasagne',
      img: 'https://assets.afcdn.com/recipe/20200408/109520_w1024h1024c1cx1866cy2800.jpg',
      id: 'recipe_0f6199b0c6a6283e57cf42056aaf6f1f',
    },
  ];

  return (
    <>
      <div className="grid justify-items-center">
        <Calendar />
        {listPlanning.map((recipe) => {
          return (
            <RecipeTile
              imgAlt={recipe.title}
              imgSrc={recipe.img}
              date={recipe.date}
              time={recipe.time}
            />
          );
        })}
      </div>
    </>
  );
};

export default Planning;
