import React, { useContext, useEffect } from 'react';
import uniqid from 'uniqid';
import { CircularProgress } from '@mui/material';
import RecipeTile from '../components/RecipeTile';
import Calendar from '../components/Calendar';
import AddToPlanningContext from '../contexts/AddToPlanningContext';
import MyFoodAPI from '../MyFoodAPI';

const Planning = () => {
  const { listPlanning, getPlanning } = useContext(AddToPlanningContext);

  useEffect(() => getPlanning(), []);

  if (listPlanning === []) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="grid justify-items-center pb-20">
        <Calendar />
        {listPlanning.map((recipe) => {
          return (
            <>
              <button
                type="button"
                onClick={() => {
                  console.log('deleted!');
                  MyFoodAPI.delete('/planning', {
                    data: {
                      id_recipe: recipe.id_recipe,
                      date: recipe.date,
                      lunch: recipe.lunch,
                      diner: recipe.diner,
                    },
                  });
                }}
                alt={recipe.id_label}
              >
                {' '}
                X
              </button>
              <RecipeTile
                key={uniqid()}
                recipeId={recipe.id_recipe}
                imgAlt={recipe.label}
                imgSrc={recipe.image}
                date={recipe.date}
                lunch={recipe.lunch}
                diner={recipe.diner}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Planning;
