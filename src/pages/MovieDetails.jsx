import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movieApi';
import { useEffect, useRef, useState } from 'react';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import poster from '../components/img/poster.jpg';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
     const [errorMes, setErrorMes] = useState(null);
     const location = useLocation();
     const backLinkHref = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();





  // Поясніть, будь ласка, чому компонент рендериться по 3 - 4 рази (консольлог стільки разів спрацьовує) 
  console.log('render MovieDetails');
 useEffect(() => {
    console.log('render useEf MovieDetails');
   if (movieDetails) {
     return;
   }
   if (errorMes) { return }
   const getMovieDetails = async () => {
     try {
       const movieDetailsData = await fetchMovieDetails(movieId);
       const normMovieDetailsData = normalizeMovieDetailsData(movieDetailsData);
       setMovieDetails(normMovieDetailsData);
     } catch (error) {
       setErrorMes(error.message);
     }

   };

   getMovieDetails();
 });


  function normalizeMovieDetailsData({
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
      genres,
    id,
  }) {
    return {
      poster_path,
      title,
      release_date,
      vote_average,
      overview,
        genres,
      id,
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

   
  return errorMes ? (
    <div className="alert-wrap">
      <h2 className="alert-txt">404 - Page not found!</h2>
    </div>
  ) : (
    movieDetails && (
      <>
        <div className="details-wrapper">
          <div className="details-img-wrapper">
            {movieDetails.poster_path ? (
              <img
                className="details-img"
                src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                alt={movieDetails.title}
                width="300px"
                height="450px"
              />
            ) : (
              <img
                className="details-noimg details-img"
                src={poster}
                alt={movieDetails.title}
                width="300px"
                height="450px"
              />
            )}
          </div>
          <div className="details-txt-wrap">
            <h1 className="details-main-title">
                {movieDetails.title} {movieDetails.release_date && `(${normalizeDate()})`}
            </h1>
            <p className="details-txt">User score: {normalizeScore()}%</p>
            <h2 className="details-title">Overview</h2>
            <p className="details-txt">{movieDetails.overview}</p>
            <h2 className="details-title">Genres</h2>

            <span className="details-txt">
              {movieDetails.genres && genresData()}
            </span>
          </div>
        </div>
        <div className="details-btn-wrap">
          <Link className="details-btn" to={backLinkHref.current}>
            ⬅Go back
          </Link>

          <Link className="details-btn" to="cast">
            Cast
          </Link>

          <Link className="details-btn" to="reviews">
            Reviews
          </Link>
        </div>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    )
  );
  
};

export default MovieDetails;


// return (
//       movieDetails && (
          
          
//         errorMes ? <div>404</div> :
//         <>
//         <div className="details-wrapper">
//           <div className="details-img-wrapper">
//             <img
//               className="details-img"
//               src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
//               alt={movieDetails.title}
//               width="300px"
//             />
//           </div>
//           <div className="details-txt-wrap">
//             <h1 className="details-main-title">
//               {movieDetails.title} ({normalizeDate()})
//             </h1>
//             <p className="details-txt">User score: {normalizeScore()}%</p>
//             <h2 className="details-title">Overview</h2>
//             <p className="details-txt">{movieDetails.overview}</p>
//             <h2 className="details-title">Genres</h2>

//             <span className="details-txt">
//               {movieDetails.genres && genresData()}
//             </span>
//           </div>
//         </div>
//         <div className="details-btn-wrap">
//           <Link className="details-btn" to="cast">
//             Cast
//           </Link>

//           <Link className="details-btn" to="reviews">
//             Reviews
//           </Link>
//         </div>
//         <Outlet />
//       </>
//     )
//   );
// };
