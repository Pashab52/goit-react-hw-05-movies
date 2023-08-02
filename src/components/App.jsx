import MovieDetails from 'pages/MovieDetails'
import { Route, Routes } from 'react-router-dom'
// import { Header } from './Header/Header';
import Layout from './Layout'
import Home from 'pages/Home';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<div>Movies</div>} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={<div>404</div>}/>
        </Route>
      </Routes>
    </div>
  );
};
