import InputLabel from '@mui/material/InputLabel';
import { Checkbox, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@mui/material/Input';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import RecipeTile from '../components/RecipeTile';

const AddToPlanning = () => {
  const history = useHistory();
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [date, setDate] = useState();
  const [lunch, setLunch] = useState(true);
  const [diner, setDiner] = useState(false);

  const getRecipe = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/%23${id}?type=public&app_id=f3601de5&app_key=960c7d96572cfedbc3eb6bffbfaf24c9`
      )
      .then((result) => result.data)
      .then((data) => {
        console.log(data);
        setRecipe(data.recipe);
      });
  };

  useEffect(() => {
    getRecipe();
  }, []);
  console.log(id);
  console.log(recipe);

  if (!recipe) {
    return <CircularProgress sx={{}} />;
  }

  return (
    <>
      <div className="flex flex-col items-center pb-24">
        <form
          className="flex flex-col items-center mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(id, date, lunch, diner);
            axios
              .post(`${process.env.REACT_APP_URL_API_SERVER}/planning`, {
                id: `.#${id}`,
                date,
                lunch,
                diner,
                image: recipe.image,
                label: recipe.label,
              })
              .then(() => {
                axios
                  .put(
                    `${process.env.REACT_APP_URL_API_SERVER}/shopping-list`,
                    {
                      ingredients: recipe.ingredients,
                    }
                  )
                  .then(() => {
                    history.push('/planning');
                  });
              })
              .catch((err) => {
                if (err.response) {
                  alert('A meal is already saved for this time !');
                  console.log('error : ', err);
                }
              });
          }}
        >
          <InputLabel
            htmlFor="my-input"
            sx={{
              color: '#2E1F27',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            When do you want to eat ... ?
          </InputLabel>
          <RecipeTile
            recipeId={recipe.uri}
            imgAlt={recipe.label}
            imgSrc={recipe.image}
          />
          <Input
            id="my-input"
            type="date"
            onChange={(e) => {
              if (e.target.value >= moment().format()) {
                setDate(e.target.value);
              } else {
                alert("You can't choose a date before today !");
              }
            }}
            required
            sx={{
              paddingX: 5,
              color: '#2E1F27',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={() => {
                  setLunch(!lunch);
                }}
                defaultChecked
                sx={{
                  color: '#2E1F27',
                  '&.Mui-checked': {
                    color: '#FDB500',
                  },
                }}
              />
            }
            label="Lunch"
          />

          <FormControlLabel
            control={
              <Checkbox
                onClick={() => {
                  setDiner(!diner);
                }}
                sx={{
                  color: '#2E1F27',
                  '&.Mui-checked': {
                    color: '#FDB500',
                  },
                }}
              />
            }
            label="Diner"
          />

          <Button
            type="submit"
            variant="raised"
            sx={{ color: '#FDB500', bgcolor: '#2E1F27', padding: 2 }}
          >
            Add to planning
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddToPlanning;
