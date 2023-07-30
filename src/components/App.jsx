import Home from 'pages/home';
import { NavLink, Route, Routes } from 'react-router-dom'



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        </Route>
      </Routes>
    </div>
  );
};
