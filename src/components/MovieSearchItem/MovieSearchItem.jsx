import { Link, useLocation } from 'react-router-dom';
import poster from '../img/poster.jpg';

export const MovieSearchItem = ({ title, poster2, date, id }) => {
  const location = useLocation();
  return (
    <li className="movie-item">
      <Link className="movie-link" to={`${id}`} state={{ from: location }}>
        <div className="movie-search-poster-wrap">
          {poster2 ? (
            <img
              className="movie-search-poster"
              src={`https://image.tmdb.org/t/p/w500${poster2}`}
              alt={title}
              width="320px"
              height="180px"
            />
          ) : (
            <img
              className="movie-search-poster"
              src={poster}
              alt={title}
              width="320px"
              height="180px"
            />
          )}
        </div>
        <div className="movie-txt-wrap">
          <p className="movie-txt">
            {title} {date && `(${Number.parseInt(date)})`}
          </p>
        </div>
      </Link>
    </li>
  );
};
