import { NavLink } from 'react-router-dom'
import styleNav from './NavBar.module.css'
import { useState } from 'react';
import { useThemeContext } from '../../../context/ThemeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const NavBar = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);

  const handleSwitch = () => {
    const newTheme = contextTheme === 'light' ? 'dark' : 'light';
    setContextTheme(newTheme);
    setChecked((prevChecked) => !prevChecked);

    document.body.style.setProperty('--body-background-color', newTheme === 'light' ? '#ffffff' : '#27292F');
    document.body.style.setProperty('--body-text-color', newTheme === 'light' ? '#27292F' : '#ffffff');
  };

  return (
    <nav className={`${styleNav.navbar} ${contextTheme}`}>
      <div
        className={styleNav.items}
      >
        <NavLink to="/" className={styleNav.navLink} activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/contact" className={styleNav.navLink} activeClassName="active-link">
          Contact
        </NavLink>
        <NavLink to="/favorite" className={styleNav.navLink} activeClassName="active-link">
          Favorite
        </NavLink>
      </div>
      <div className='toggle-container'>
        <label htmlFor="check" className="switch">
          <DarkModeSwitch
            id="check"
            className="toggle"
            type="checkbox"
            checked={checked}
            onChange={handleSwitch}
          />
        </label>
      </div>
    </nav >
  );
};

export default NavBar;