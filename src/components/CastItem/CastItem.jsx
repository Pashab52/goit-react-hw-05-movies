import photo from '../img/Photo.png'


export const CastItem = ({ profile_path, name, character }) => {
  return (
    <li className="cast-item-wrap">
      <div>
        {profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${profile_path}`}
            alt={name}
            width="240px"
            height="360px"
          />
        ) : (
          <img
              src={photo}
            alt={name}
            width="240px"
            height="360px"
          />
        )}
      </div>
      <div className='cast-txt-wrap'>
        <h3 className="cast-name">{name}</h3>
        <p className="cast-char">Character: {character}</p>
      </div>
    </li>
  );
};