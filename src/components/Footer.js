import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { green } from '@mui/material/colors';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Footer({ height }) {
  return (
    <div id="footer" style={{ height }}>
      <ul className="flex flex-row justify-between bg-blue-200 h-15 py-2">
        <li>
          <NavLink activeClassName="active" exact to="/">
            <HomeIcon sx={{ fontSize: 60, color: green[500] }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/favorites">
            <FavoriteIcon sx={{ fontSize: 60, color: green[500] }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/shopping-list">
            <ShoppingBasketIcon sx={{ fontSize: 60, color: green[500] }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/planning">
            <CalendarTodayIcon sx={{ fontSize: 58, color: green[500] }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/shopkeepers">
            <StorefrontIcon sx={{ fontSize: 60, color: green[500] }} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
