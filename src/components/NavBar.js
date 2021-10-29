import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ setSearch }) {
  const [newSearch, setNewSearch] = useState('');

  return (
    <>
      <div
        id="NavBar"
        className="flex flex-row justify-between items-center h-25 bg-third w-full"
      >
        <NavLink activeClassName="active" exact to="/">
          <img
            src="media/1.png"
            alt="img-logo"
            className="items-center my-0 w-auto h-20"
          />
        </NavLink>
        <h1 id="NavBarTitle" className="w-auto">
          My Food
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(newSearch);
          }}
        >
          <label htmlFor="searchBar">
            <input
              className="rounded-2xl border border-black border-solid opacity-50 shadow-2xl mx-4 w-auto"
              id="searchBar"
              type="text"
              placeholder="Rechercher une recette"
              onChange={(e) => setNewSearch(e.target.value)}
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default NavBar;
