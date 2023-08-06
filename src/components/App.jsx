// import MovieDetails from 'pages/MovieDetails'
import { Route, Routes } from 'react-router-dom'
// import { Header } from './Header/Header';
import Layout from './Layout'
// import Home from 'pages/Home';
// import Movie from 'pages/Movie';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';

const Home = lazy(() => import ('../pages/Home'))
const Movie = lazy(() => import('../pages/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        maxWidth: '1400px',
        height: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="alert-wrap">
                <h2 className="alert-txt">404 - Page not found!</h2>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
