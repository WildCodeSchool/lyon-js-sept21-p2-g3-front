import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Footer({ height }) {
  return (
    <div id="footer" style={{ height }}>
      <ul className="flex flex-row justify-between bg-background h-15 py-4 px-2 lg:hidden">
        <li>
          <NavLink activeClassName="active" exact to="/">
            <HomeIcon sx={{ fontSize: 45, color: '#FDB500' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/favorites">
            <FavoriteIcon sx={{ fontSize: 45, color: '#FDB500' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/shopping-list">
            <ShoppingBasketIcon sx={{ fontSize: 45, color: '#FDB500' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/planning">
            <CalendarTodayIcon sx={{ fontSize: 45, color: '#FDB500' }} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/shopkeepers">
            <StorefrontIcon sx={{ fontSize: 45, color: '#FDB500' }} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
