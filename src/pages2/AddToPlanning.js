import FormControl from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import { Checkbox, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeTile from '../components/RecipeTile';

const AddToPlanning = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  const getRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/%23${id}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
      )
      .then((result) => result.data)
      .then((data) => setRecipe(data.recipe));
  };

  useEffect(() => {
    getRecipe();
  }, []);
  console.log(id);
  console.log(recipe);

  if (!recipe) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="flex flex-col items-center pb-24">
        <RecipeTile
          recipeId={recipe.uri}
          imgAlt={recipe.label}
          imgSrc={recipe.image}
        />
        <FormControl className="flex flex-col items-center mt-10">
          <InputLabel htmlFor="my-input">When ? </InputLabel>
          <Input id="my-input" type="date" />
          <FormControlLabel control={<Checkbox />} label="Noon" />
          <FormControlLabel control={<Checkbox />} label="Night" />
          <Button variant="contained">Add to planning</Button>
        </FormControl>
      </div>
    </>
  );
};

export default AddToPlanning;
