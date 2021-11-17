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

export default function IngredientList() {
  const { shoppingList } = useContext(AddToShoppingListContext);
  // const { shoppingList, setShoppingList } = useContext(AddToShoppingListContext);
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
              key={value.foodId}
              onClick={handleToggle(value)}
              checked={checked.indexOf(value) !== -1}
              secondaryAction={
                <Checkbox
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
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
                  <Avatar alt={`${value.food}`} src={`${value.image}`} />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    '& .MuiTypography-root': {
                      fontWeight: 'bold',
                      fontSize: 17,
                    },
                  }}
                  id={value.foodId}
                  primary={`${value.food}  (${Math.round(value.quantity)} ${
                    value.measure
                  })`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <Button
          onClick={setChecked}
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
