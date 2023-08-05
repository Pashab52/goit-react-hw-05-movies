import css from './TrendsItem.module.css'
import {Link, useLocation} from 'react-router-dom'


export const TrendsItem = ({ title, name, id, backdrop_path }) => {
  const location = useLocation();
     return (
      <li>
        <Link
          to={`movies/${id}`}
          state={{ from: location }}
          className={css.trend}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${backdrop_path}")`,
          }}
        >
          {title ? <p>{title} </p> : <p>{name}</p>}
        </Link>
      </li>
    );
  
}

//  return title ? (
//    <li>
//      <Link
//        to={`movies/${id}`}
//        className={css.trend}
//        style={{
//          backgroundImage: `url("https://image.tmdb.org/t/p/w500${backdrop_path}")`,
//        }}
//      >
//        {title}
//      </Link>
//    </li>
//  ) : (
//    <li>
//      <Link
//        to={`movies/${id}`}
//        className={css.trend}
//        style={{
//          backgroundImage: `url("https://image.tmdb.org/t/p/w500${backdrop_path}")`,
//        }}
//      >
//        {name}
//      </Link>
//    </li>
//  );