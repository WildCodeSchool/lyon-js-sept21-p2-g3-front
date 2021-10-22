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
          <label htmlFor="searchBar">
            <input
              id="searchBar"
              type="text"
              placeholder="Rechercher une recette"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default NavBar;
