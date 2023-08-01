import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movieApi';

import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  // Поясніть, будь ласка, чому компонент рендериться по 3 - 4 рази (консольлог стільки разів спрацьовує)
  console.log('render MovieDetails');

  useEffect(() => {
     console.log('render useEf MovieDetails');
    if (movieDetails){return}
    const getMovieDetails = async () => {
      const movieDetailsData = await fetchMovieDetails(movieId);

      const normMovieDetailsData = normalizeMovieDetailsData(movieDetailsData);
      setMovieDetails(normMovieDetailsData);
    };

    try {
      getMovieDetails();
    } catch (error) {
      console.error(error);
    }
  });

  function normalizeMovieDetailsData({
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  }) {
    return {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
      genres,
    };
  }

  // const { poster_path,
  //   original_title,
  //   release_date,
  //   vote_average,
  //   overview,
  //   genres=[]} = movieDetails;

  // console.log(movieDetails);

  const genresData = () => {
    return movieDetails.genres.map(({ name }) => name).join(', ');
  };

  const normalizeDate = () => {
    return Number.parseInt(movieDetails.release_date);
  };

  const normalizeScore = () => {
    return Math.round(movieDetails.vote_average * 10);
  }

  return (
    movieDetails && (
      <>
        <div className="details-wrapper">
          <div className="details-img-wrapper">
            <img
              className="details-img"
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width="300px"
            />
          </div>
          <div>
            <h1>
              {movieDetails.title} ({normalizeDate()})
            </h1>
            <p>User score: {normalizeScore()}%</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>

            <span>{genresData()}</span>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>

            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet/>
      </>
    )
  );
};

export default MovieDetails;
