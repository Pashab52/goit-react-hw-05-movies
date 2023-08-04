import { useEffect, useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { fetchMovie } from "services/movieApi";
import { useSearchParams } from "react-router-dom";
import { MovieSearchItem } from "components/MovieSearchItem/MovieSearchItem";


const Movie = () => {
  // const [query, setQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      const serchQuery = searchParams.get('query');
      console.log(serchQuery);
        if (!serchQuery) {
          return;
        }

    const getMovie = async () => {
      try {
        
        
        const movieData = await fetchMovie(serchQuery);
        console.log(movieData);
        const normalizeMovieData = normalizeMovie(movieData);
        console.log(normalizeMovieData);
        
        
      } catch (error) {
        console.error(error);
      }

    }
    getMovie()
  })
  
  
  const handleOnSubmit = (formData) => {
    console.log(formData)
    // setQuery(formData)
    setSearchParams(`query=${formData}`);
    
    }

  const normalizeMovie = (movieData) => {
    return movieData.results.map(
      ({ id, title, poster_path, backdrop_path, release_date }) => ({
        id,
        title,
        poster_path,
        backdrop_path,
        release_date,
      })
    );
}


    return (
      <>
          
            <SearchBar handleOnSubmit={handleOnSubmit } />
           
            <MovieSearchItem />
          
            
      </>
    );



}

export default Movie