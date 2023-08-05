import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { fetchMovie } from 'services/movieApi';
import { useSearchParams } from 'react-router-dom';
import { MovieSearchItem } from 'components/MovieSearchItem/MovieSearchItem';

const Movie = () => {
  const [movies, setMovies] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  // const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const serchQuery = searchParams.get('query');
    // console.log(serchQuery);
    if (!serchQuery) {
      return;
    }
    // if (movies) { return };

    const getMovie = async () => {
      setShowLoader(true);
      try {
        const movieData = await fetchMovie(serchQuery);
        const normalizeMovieData = normalizeMovie(movieData);
        setMovies(normalizeMovieData);
      } catch (error) {
        console.error(error);
      } finally {
        setShowLoader(false);
      }
    };
    getMovie();
  }, [searchParams]);

  const handleOnSubmit = formData => {
    // setQuery(formData)
    setSearchParams(`query=${formData}`);
  };

  const normalizeMovie = movieData => {
    return movieData.results.map(
      ({ id, title, poster_path, backdrop_path, release_date }) => ({
        id,
        title,
        poster_path,
        backdrop_path,
        release_date,
      })
    );
  };

  return (
    <div className="movie-wrap">
      <SearchBar handleOnSubmit={handleOnSubmit} showLoader={showLoader} />

      <ul className="movie-list">
        {movies &&
          movies.map(
            ({ id, title, poster_path, backdrop_path, release_date }) => (
              <MovieSearchItem
                key={id}
                id={id}
                title={title}
                poster={poster_path}
                poster2={backdrop_path}
                date={release_date}
              />
            )
          )}
      </ul>
    </div>
  );
};

export default Movie;
