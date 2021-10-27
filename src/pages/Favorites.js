import React, { useState } from 'react';
import axios from 'axios';
// import RecipeTile from '../components/RecipeTile';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const getFavorites = () => {
    axios
      .get('http://localhost:5000/favorites')
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setFavorites(data);
        console.log(favorites);
      });
  };

  return (
    <div>
      <h1> Favorites</h1>
      <button type="button" onClick={getFavorites}>
        {' '}
        Get Favorites{' '}
      </button>
    </div>
  );
}

export default Favorites;
