import { NavLink} from 'react-router-dom';


export const Header = () => {
  return (
    <div className="header-cont">
      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </nav>
    </div>
  );
};
