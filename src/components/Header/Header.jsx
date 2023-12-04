import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
      </nav>
    );
}

export default Header;