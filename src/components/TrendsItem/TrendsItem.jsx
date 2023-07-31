import css from './TrendsItem.module.css'

export const TrendsItem = ({ title, name, id, backdrop_path }) => {
    return title ? (
      <li >
        <p
          className={css.trend}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${backdrop_path}")`,
          }}
        >
          {title}
        </p>
      </li>
    ) : (
      <li>
        <p
          className={css.trend}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${backdrop_path}")`,
          }}
        >
          {name}
        </p>
      </li>
    );
}