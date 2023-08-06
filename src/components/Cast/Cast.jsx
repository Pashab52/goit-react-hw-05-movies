import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/movieApi';
import { CastItem } from 'components/CastItem/CastItem';
import { Loader } from 'components/Loader/Loader';


 const Cast = () => {
   const [cast, setCast] = useState([])
     const [showLoader, setShowLoader] = useState(false);
    const { movieId } = useParams();


 
    useEffect(() => {
      // if (cast) {
      //   return;
      // }

      const getCast = async () => {
        setShowLoader(true)
        try {
          const castData = await fetchCast(movieId);
          if (castData.cast.length) {
            const normalizeCastData = getNormalizeCastData(castData.cast);
            setCast(normalizeCastData);
          } else {
            return;
          }
        } catch (error) {
          console.error(error);
        } finally{ setShowLoader(false) }
      };

      getCast();
    },[movieId]);

    function getNormalizeCastData(castData) {
        return castData.map(({ cast_id, profile_path, name, character }) => ({
            cast_id,
            profile_path,
            name,
            character,
        }));
    
    };

       return showLoader ? (
         <Loader />
       ) : (
         <ul className="cast-wrapper">
           {cast.length ? (
             cast.map(({ cast_id, profile_path, name, character }) => {
               return (
                 <CastItem
                   key={cast_id}
                   profile_path={profile_path}
                   name={name}
                   character={character}
                 />
               );
             })
           ) : (
             <li className="nocast-item-wrap">
               <p className="cast-char">
                 We don't have cast info for this movie
               </p>
             </li>
           )}
         </ul>
       );
}

export default Cast;