/* eslint-disable */
import React from 'react';

function NavBar() {
  return (
    <>
      <div id="NavBar" className="flex flex-row justify-between">
        <img src="/" alt="logo" className="" />
        <h1 id="NavBarTitle" className="">
          MyFood
        </h1>
        <div className="">
          <label for="searchBar" />
          <input
            id="searchBar"
            type="text"
            placeholder="Rechercher une recette"
          ></input>
        </div>
      </div>
    </>
  );
}

export default NavBar;
