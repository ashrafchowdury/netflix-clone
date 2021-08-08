import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">Netflix</div>
        <div>
          <NavLink exact to='/signup'>
            <button className="signUp" >
              Sign Up
            </button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
