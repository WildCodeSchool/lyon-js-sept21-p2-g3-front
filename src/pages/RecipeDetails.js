import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BlenderIcon from '@mui/icons-material/Blender';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Ingredients from '../components/Ingredients';

const RecipeDetails = () => {
  return (
    <>
      <img
        src="/img/image.jpg"
        alt="img"
        className="h-auto w-screen opacity-50"
      />
      <h1 className="text-center m-2">tittle</h1>
      <div className="flex flex-row justify-around bg-green-200 rounded-lg m-5 h-9">
        <div className="flex flex-row text-xs">
          <BlenderIcon fontSize="small" className="m-1" />
          <div className="m-2"> Temps</div>
        </div>
        <div className="flex flex-row text text-xs">
          <AccessTimeIcon fontSize="small" className="m-1" />
          <div className="m-2">Temps</div>
        </div>
        <div className="flex flex-row text-xs">
          <div className="m-2">Difficulté </div>
          <RestaurantIcon fontSize="small" className="m-1" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-green-500 h-5 w-1/3 rounded-lg flex justify-center">
          <p className=""> 4 personnes </p>
        </div>
      </div>
      <div className="bg-green-200 m-5 h-60 rounded-lg ">
        <div className="grid grid-cols-3 gap-4 p-5">
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
        </div>
      </div>
      <div className="bg-green-200 m-5 h-60 rounded-lg">Les étapes</div>
    </>
  );
};

export default RecipeDetails;
