import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function NavBar({ setSearch }) {
  const [newSearch, setNewSearch] = useState('');

  const history = useHistory();

  return (
    <>
      <div
        id="NavBar"
        className="flex flex-row justify-between items-center h-25 bg-background pb-1"
      >
        <NavLink
          activeClassName="active"
          exact
          to="/"
          className="flex flex-row justify-between items-center h-25 "
        >
          <img src="media/1.png" alt="img-logo" className="h-20 " />
          <img src="media/2.png" alt="img-logo" className="h-20" />
        </NavLink>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(newSearch);
            history.push('/');
          }}
        >
          <label htmlFor="searchBar">
            <input
              className="rounded-lg border border-black border-solid opacity-30 shadow-xl mx-3 w-30 h-9 pl-4 lg:w-80"
              id="searchBar"
              type="text"
              placeholder="Search"
              onChange={(e) => setNewSearch(e.target.value)}
            />
            <span className="pr-4 -ml-12">
              <SearchIcon sx={{ fontSize: 28, color: '#FDB500' }} />
            </span>
          </label>
        </form>
      </div>
    </>
  );
}

export default NavBar;
