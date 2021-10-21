/* eslint-disable */
import React from 'react';
import {NavLink} from 'react-router-dom';

function Footer(){
    return (
   <>
      <ul className="bg-gray-400">
          <li><NavLink activeClassName="active" exact to="/"><img src="https://img.icons8.com/material-outlined/50/000000/home--v2.png" alt="Home"/></NavLink></li>
          <li><NavLink activeClassName="active" to="/Favorites">Favorites</NavLink></li>
          <li><NavLink activeClassName="active" to="/ListOfIngredients">List of Ingredients</NavLink></li>
          <li><NavLink activeClassName="active" to="/Planning">Planning</NavLink></li>
          <li><NavLink activeClassName="active" to="/Shopkeepers">Shopkeepers</NavLink></li>
        </ul>
    </>
    );
}

export default Footer;