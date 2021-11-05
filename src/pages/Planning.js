import React, { useContext, useEffect } from 'react';
import RecipeTile from '../components/RecipeTile';
import Calendar from '../components/Calendar';
import AddToPlanningContext from '../contexts/AddToPlanningContext';

const Planning = () => {
  const { listPlanning, getPlanning } = useContext(AddToPlanningContext);

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
