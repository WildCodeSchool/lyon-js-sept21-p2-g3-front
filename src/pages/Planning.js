import React, { useContext, useEffect } from 'react';
import uniqid from 'uniqid';
import { CircularProgress } from '@mui/material';
import RecipeTile from '../components/RecipeTile';
import Calendar from '../components/Calendar';
import AddToPlanningContext from '../contexts/AddToPlanningContext';

const Planning = () => {
  const { listPlanning, getPlanning } = useContext(AddToPlanningContext);

  useEffect(() => getPlanning(), []);

  if (listPlanning === []) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="grid justify-items-center pb-32">
        <Calendar />
        {listPlanning.map((recipe) => {
          return (
            <RecipeTile
              key={uniqid()}
              recipeId={recipe.id}
              imgAlt={recipe.title}
              imgSrc={recipe.img}
              date={recipe.date}
              lunch={recipe.lunch}
              diner={recipe.diner}
            />
          );
        })}
      </div>
    </>
  );
};

export default Planning;
