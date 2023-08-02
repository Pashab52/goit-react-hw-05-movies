import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/movieApi';
import { CastItem } from 'components/CastItem/CastItem';

export const Cast = () => {
    const [cast, setCast] = useState(null)
    const { movieId } = useParams();

    useEffect(() => {
        if (cast) { return };
     
        const getCast = async () => {
            try {
                const castData = await fetchCast(movieId);
              
             
                const normalizeCastData = getNormalizeCastData(castData.cast);
                console.log(normalizeCastData);

                setCast(normalizeCastData);
            } catch (error) {
                console.error(error)
            
            }
        };

        getCast();
    

    });

    function getNormalizeCastData(castData) {
        return castData.map(({ cast_id, profile_path, name, character }) => ({
            cast_id,
            profile_path,
            name,
            character,
        }));
    
    };


    return (
      <>
        {cast &&
          cast.map(({ cast_id, profile_path, name, character }) => {
            return (
              <CastItem
                key={cast_id}
                profile_path={profile_path}
                name={name}
                character={character}
              />
            );
          })}
      </>
    );
}
