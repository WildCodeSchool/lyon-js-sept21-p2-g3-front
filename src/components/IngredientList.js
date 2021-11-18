/* eslint-disable*/
import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { CircularProgress, Button } from '@mui/material';
import AddToShoppingListContext from '../contexts/AddToShoppingListContext';
import MyFoodAPI from '../MyFoodAPI';

export default function IngredientList() {
  const { shoppingList, setShoppingList, getShoppingList } = useContext(
    AddToShoppingListContext
  );
  // const { shoppingList, setShoppingList } = useContext(AddToShoppingListContext);
  const [ingredientToDelete, setIngredientToDelete] = useState([]);

  // const { listPlanning } = React.useContext();

  const handleToggle = (value) => {
    console.log('ingredient to delete before: ', ingredientToDelete);
    if (ingredientToDelete.includes(value.id_ingredient)) {
      const newIngredientToDelete = ingredientToDelete.filter(
        (i) => i !== value.id_ingredient
      );
      setIngredientToDelete(newIngredientToDelete);
    } else {
      setIngredientToDelete([...ingredientToDelete, value.id_ingredient]);
    }
    console.log('ingredient to delete after : ', ingredientToDelete);
  };

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };

  if (!shoppingList) {
    return <CircularProgress />;
  }

  return (
    <>
      <List
        sx={{
          width: '100%',
          maxWidth: 600,
          margin: 'auto',
          color: '#2E1F27',
          paddingBottom: 7,
        }}
      >
        {shoppingList.map((value) => {
          return (
            <ListItem
              key={value.id_ingredient}
              onClick={() => handleToggle(value)}
              // checked={checked.indexOf(value) !== -1}
              secondaryAction={
                <Checkbox
                  onChange={() => handleToggle(value)}
                  // checked={checked.indexOf(value) !== -1}
                  sx={{
                    color: '#2E1F27',
                    '&.Mui-checked': {
                      color: '#FDB500',
                    },
                  }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`${value.name}`}
                    src={`${value.image}`}
                    sx={{ border: '#2E1F27' }}
                  />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: 'bold',
                      fontSize: 17,
                    },
                  }}
                  id={value.id_ingredient}
                  primary={`${value.name}  (${Math.round(value.quantity)} ${
                    value.measure
                  })`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <Button
          onClick={() => {
            console.log('ingredient send : ', ingredientToDelete);
            MyFoodAPI.delete('/shopping-list', {
              data: {
                ingredientToDelete,
              },
            }).then(() => {
              getShoppingList();
            });
          }}
          type="submit"
          variant="raised"
          sx={{
            color: '#FDB500',
            bgcolor: '#2E1F27',
            padding: 2,
            marginTop: 2,
            fontWeight: 'bold',
          }}
        >
          DELETE ITEMS
        </Button>
      </List>
    </>
  );
}
