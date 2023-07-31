import Home from 'pages/home';
import { Route, Routes } from 'react-router-dom'
import { Header } from './Header/Header';



export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
        </Route>
      </Routes>
    </div>
  );
};
