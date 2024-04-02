import React from 'react';
import{useState ,useEffect} from 'react';
import StarRating from './StarRating';

function MovieDetails({ movie, backgroundImageUrl }) {
  const [userRating, setUserRating] = useState(null);

  useEffect(() => {
    if (movie) {
      const savedRating = JSON.parse(localStorage.getItem(`rating-${movie.episode_id}`));
      setUserRating(savedRating || 0);

      
    }
  }, [movie]);

  const handleSetRating = (rating) => {
    setUserRating(rating);
    localStorage.setItem(`rating-${movie.episode_id}`, JSON.stringify(rating));
  };


  const style = {
    '--backdropUrl': `url(${backgroundImageUrl})`,
  };

  return (
    <div className="MovieDetails" style={style}>
            {movie ? (

  <div className="MovieDetailsContent">
          <div className="MovieDetailsHeader">
            <h2>
              {movie.title.split(' ').slice(0, -2).join(' ')}<br />
              {movie.title.split(' ').slice(-2).join(' ')}
            </h2>
            <div className="StarRatingContainer">
              <StarRating
                maxRating={10}
                size={20}
                defaultRating={userRating}
                movieId={movie.episode_id}
                onSetRating={handleSetRating}
                
              />
            </div>
          </div>
          <div className="MovieDetailsEpisode">
            <p><strong>Episode:</strong> {movie.episode_id}</p>
          </div>
        </div>
      ) : (
        <div>
          <h2>Welcome to Star Wars Movies</h2>
          <p>Please select a movie to view details.</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;