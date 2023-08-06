import { NavLink} from 'react-router-dom';


export const Header = () => {
  return (
    <div className="header-cont">
      <nav className="header-nav">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="movies">
          Movies
        </NavLink>
      </nav>
    </div>
  );
};
