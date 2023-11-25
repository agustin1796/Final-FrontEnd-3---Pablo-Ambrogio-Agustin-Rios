import { NavLink } from 'react-router-dom'
import './NavBar.module.css'
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

    document.body.style.setProperty('--body-background-color', newTheme === 'light' ? '#ffffff' : '#000000');
    document.body.style.setProperty('--body-text-color', newTheme === 'light' ? '#000000' : '#ffffff');
  };

  return (
    <nav className={`navbar ${contextTheme}`}>
      <div>
        <NavLink to="/" className="nav-link" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active-link">
          Contact
        </NavLink>
        <NavLink to="/favorite" className="nav-link" activeClassName="active-link">
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
    </nav>
  );
};

export default NavBar;