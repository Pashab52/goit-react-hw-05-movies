import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/movieApi';
import { CastItem } from 'components/CastItem/CastItem';

export const Cast = () => {
    const [cast, setCast] = useState([])
    const { movieId } = useParams();

  

 
    useLayoutEffect(() => {
      // if (cast) {
      //   return;
      // }

      const getCast = async () => {
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
        }
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

       return (
      <ul className="cast-wrapper">
        {cast ? (
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
          <li >
            <p className="cast-char">
              We don't have cast info for this movie
            </p>
          </li>
        )}
      </ul>
    );
}
