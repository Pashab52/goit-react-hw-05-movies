import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Header/Header';
import {Layout} from './Layout'



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
            <Route path="cast" element={<div>Cast</div>} />
            
            <Route path="reviews" element={<div>Reviews</div>} />
            
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
