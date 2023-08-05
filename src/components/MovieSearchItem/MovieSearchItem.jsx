import { Link, useLocation } from 'react-router-dom';

export const MovieSearchItem = ({ title, poster, poster2, date, id }) => {
  const location = useLocation();
  return (
    <li className="movie-item">
      <Link to={`${id}`} state={{ from: location }}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${poster2}`} alt={title} />
        </div>
        <div className='movie-txt-wrap'>
          <p >
            {title} ({Number.parseInt(date)})
          </p>
        </div>
      </Link>
    </li>
  );
};
