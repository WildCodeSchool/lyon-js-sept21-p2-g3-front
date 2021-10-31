import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function NavBar({ setSearch }) {
  const [newSearch, setNewSearch] = useState('');

  return (
    <>
      <div
        id="NavBar"
        className="flex flex-row justify-between items-center h-25 bg-background w-full"
      >
        <NavLink
          activeClassName="active"
          exact
          to="/"
          className="flex flex-row justify-between items-center h-25 "
        >
          <img src="media/1.png" alt="img-logo" className="h-20" />
          <img src="media/2.png" alt="img-logo" className="h-20" />
        </NavLink>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(newSearch);
          }}
        >
          <label htmlFor="searchBar">
            <input
              className="rounded-lg border border-black border-solid opacity-80 shadow-xl mx-3 w-60 h-9"
              id="searchBar"
              type="text"
              placeholder="   Search"
              onChange={(e) => setNewSearch(e.target.value)}
            />
            <span className="pr-5">
              <SearchIcon sx={{ fontSize: 36, color: '#FDB500' }} />
            </span>
          </label>
        </form>
      </div>
    </>
  );
}

export default NavBar;
