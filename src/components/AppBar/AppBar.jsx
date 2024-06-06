import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppBar.module.css';
import { GiSurferVan } from 'react-icons/gi';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.box_logo}>
        <GiSurferVan size="40" />
        <p className={css.logo}>Camper Rent</p>
      </div>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
