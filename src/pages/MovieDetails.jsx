import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "services/movieApi";

import { useEffect, useState } from "react";


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
const { movieId } = useParams();
    console.log(movieId);
    

useEffect(() => {
    const getMovieDetails = async () => {

        const movieDetailsData = await fetchMovieDetails(movieId);

        const normMovieDetailsData =
            normalizeMovieDetailsData(movieDetailsData);
        setMovieDetails(normMovieDetailsData);
    }

        try {
           getMovieDetails();
        } catch (error) {
            console.error(error)
        }

    
},[movieId])
    
    
    function normalizeMovieDetailsData({
        poster_path,
        original_title,
      release_date,
      vote_average,
      overview,
      genres,
    }) {
        return {
          poster_path,
            original_title,
          release_date,
          vote_average,
          overview,
          genres,
        }
    }

console.log(movieDetails);
    return (
      movieDetails && (
        <>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h1>{movieDetails.original_title}</h1>
            <p>{movieDetails.release_date}</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <p></p>
          </div>
        </>
      )
    );
    
    
}


export default MovieDetails;