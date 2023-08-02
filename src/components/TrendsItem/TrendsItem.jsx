import css from './TrendsItem.module.css'
import {Link} from 'react-router-dom'


export const TrendsItem = ({ title, name, id, backdrop_path }) => {
    return title ? (
      <li>
        <Link
          to={`movies/${id}`}
          className={css.trend}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${backdrop_path}")`,
          }}
        >
          {title}
        </Link>
      </li>
    ) : (
      <li>
        <Link
          to={`movies/${id}`}
          className={css.trend}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${backdrop_path}")`,
          }}
        >
          {name}
        </Link>
      </li>
    );
}