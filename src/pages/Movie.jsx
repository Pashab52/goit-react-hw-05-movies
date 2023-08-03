import { useEffect, useState } from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { fetchMovie } from "services/movieApi";


const Movie = () => {
    const [query, setQuery] = useState(null);

  useEffect(() => {

    const getMovie = async () => {
      try {
        const movieData = await fetchMovie(query);
        console.log(movieData)
        
      } catch (error) {
        console.error(error);
      }

    }
    getMovie()
  })
  
  
  const handleOnSubmit = (formData) => {
    console.log(formData)
      setQuery(formData)
    }




    return (
      <div>
        <SearchBar handleOnSubmit={handleOnSubmit } />
      </div>
    );



}

export default Movie