import React from 'react';
import useFetchMovieImage from '../../hooks/useFetchMovieImage';

function MovieItem({ movie, onMovieSelect, selectedBackgroundImageUrl, isSelected }) {
  const fetchedImageUrl = useFetchMovieImage(movie.title);
  const imageUrl = isSelected ? selectedBackgroundImageUrl : fetchedImageUrl;

  const itemStyle = {
    '--movieImageUrl': `url(${imageUrl})`
  };

  return (
    <div
      className="movie-item"
      style={itemStyle}
      onClick={() => onMovieSelect(movie)}
    >
      <div className="movie-item-content">
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
}

export default MovieItem;
