import { NavLink } from 'react-router-dom'
import styleNav from './NavBar.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const NavBar = () => {

  const { handleChangeTheme, theme } = useContext(ThemeContext)

  const isMode = theme ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light')

  return (
    <nav className={`${styleNav.navbar} ${isMode}`}>
      <div
        className={styleNav.items}
      >
        <NavLink to="/" className={styleNav.navLink}>
          Home
        </NavLink>
        <NavLink to="/contact" className={styleNav.navLink}>
          Contact
        </NavLink>
        <NavLink to="/favorite" className={styleNav.navLink} >
          Favorite
        </NavLink>
      </div>
      <div>
        <div
          onClick={handleChangeTheme}
        >
          {theme ? <WbSunnyIcon /> : <NightlightIcon sx={{ color: '#222' }} />}
        </div>
      </div>
    </nav >
  );
};

export default NavBar;