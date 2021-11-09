import React, { useContext, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { CircularProgress } from '@mui/material';
import { uniqueId } from 'lodash';
import AddToShoppingListContext from '../contexts/AddToShoppingListContext';

export default function IngredientList() {
  const { shoppingList } = useContext(AddToShoppingListContext);
  const [checked, setChecked] = useState([]);
  // const { listPlanning } = React.useContext();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  if (!shoppingList) {
    return <CircularProgress />;
  }

  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        color: '#2E1F27',
      }}
    >
      {shoppingList.map((value) => {
        return (
          <ListItem
            key={uniqueId()}
            onClick={(e) => {
              e.preventDefault();
              handleToggle(value);
            }}
            secondaryAction={
              <Checkbox
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                sx={{
                  color: '#2E1F27',
                  '&.Mui-checked': {
                    color: '#DD7230',
                  },
                }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value.food}`}
                  src={`${value.image}`}
                  sx={{ border: '#2E1F27' }}
                />
              </ListItemAvatar>
              <ListItemText
                id={value.foodId}
                primary={`${value.food}  (${Math.round(value.quantity)} ${
                  value.measure
                })`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
