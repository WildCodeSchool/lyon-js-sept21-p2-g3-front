import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <ul className="flex flex-row justify-between items-center bg-third h-20">
        <li>
          <NavLink activeClassName="active" exact to="/">
            <img
              className=""
              id="ImgHome"
              src="https://img.icons8.com/material-outlined/50/000000/home--v2.png"
              alt="Home"
            />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/favorites">
            <img
              id="ImgHeart"
              src="https://img.icons8.com/ios-filled/50/000000/like--v1.png"
              alt="Heart"
            />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/shopping-list">
            <img
              id="ImgList"
              src="https://img.icons8.com/ios-filled/50/000000/hamper.png"
              alt="List"
            />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/planning">
            {' '}
            <img
              id="ImgPlanning"
              src="https://img.icons8.com/ios/50/000000/planner.png"
              alt="Planning"
            />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/shopkeepers">
            <img
              id="ImgFarmer"
              src="https://img.icons8.com/external-itim2101-fill-itim2101/64/000000/external-farmer-male-occupation-avatar-itim2101-fill-itim2101-1.png"
              alt="Farmer"
            />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
