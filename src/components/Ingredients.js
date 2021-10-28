import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Ingredients = () => {
  return (
    <div className="flex flex-row ">
      <div>
        <Stack>
          <Avatar alt="Ingrédients" src="" sx={{ width: 30, height: 30 }} />
        </Stack>
        <p className="text-xs">nom</p>
      </div>
      <div>
        <p className="text-xs m-2">quantité</p>
      </div>
    </div>
  );
};

export default Ingredients;
