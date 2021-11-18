import React, { useContext, useEffect } from 'react';
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
      <div className="grid justify-items-center">
        <Calendar />
        <div className="grid justify-items-center pb-20 lg:grid lg:grid-cols-3 lg:justify-items-center lg:mx-60">
          {listPlanning.map((recipe) => {
            return (
              <RecipeTile
                key={recipe.id_recipe}
                recipeId={recipe.id_recipe}
                imgAlt={recipe.label}
                imgSrc={recipe.image}
                date={recipe.date}
                lunch={recipe.lunch}
                diner={recipe.diner}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center bg-background text-primary text-xl h-20 sm:hidden">
        <p className="text-center"> Make with ❤️ by Wild Code School </p>
      </div>
    </>
  );
};

export default Planning;
