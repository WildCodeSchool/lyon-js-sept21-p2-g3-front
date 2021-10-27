import React from 'react';
import Avatar from '@mui/material/Avatar';

const Ingredients = () => {
  return (
    <div className="flex flex-row py-3">
      <div>
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <p className="">500g</p>
      </div>
      <div>
        <p>nom</p>
      </div>
    </div>
  );
};

export default Ingredients;
