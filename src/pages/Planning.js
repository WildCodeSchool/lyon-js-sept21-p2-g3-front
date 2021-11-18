import React, { useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';
import { CircularProgress } from '@mui/material';
import RecipeTile from '../components/RecipeTile';
import Calendar from '../components/Calendar';
import AddToPlanningContext from '../contexts/AddToPlanningContext';

const Planning = () => {
  const { listPlanning, getPlanning } = useContext(AddToPlanningContext);

  const [deleteFromPlanning, setDeleteFromPlanning] = useState(false);

  useEffect(() => getPlanning(), [deleteFromPlanning]);

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
              <RecipeTile
                key={uniqid()}
                recipeId={recipe.id_recipe}
                imgAlt={recipe.label}
                imgSrc={recipe.image}
                date={recipe.date}
                lunch={recipe.lunch}
                diner={recipe.diner}
                isInPlanning
                setDeleteFromPlanning={setDeleteFromPlanning}
                deleteFromPlanning={deleteFromPlanning}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Planning;
