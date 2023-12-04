import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../contexts/ThemeContext';
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import classNames from 'classnames';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
 
    return (
      <div className={classNames({ dark: theme === "dark" })}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
        </nav>

        {theme === "light" ? (
          <ModeNightIcon onClick={toggleTheme} />
        ) : (
          <LightModeIcon onClick={toggleTheme} />
        )}
      </div>
    );
}

export default Header;