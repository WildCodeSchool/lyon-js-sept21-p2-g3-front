import React, { useEffect, useState } from 'react';
import RecipeTile from '../components/RecipeTile';
import Calendar from '../components/Calendar';
import MyFoodAPI from '../MyFoodAPI';

const Planning = () => {
  const [listPlanning, setListPlanning] = useState([]);

  const getPlanning = () => {
    MyFoodAPI.get('/planning')
      .then((response) => response.data)
      .then((data) => {
        setListPlanning(data);
      });
  };

  useEffect(() => getPlanning(), []);

  return (
    <>
      <div className="grid justify-items-center">
        <Calendar />
        {listPlanning.map((recipe) => {
          return (
            <RecipeTile
              recipeId={recipe.id}
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
