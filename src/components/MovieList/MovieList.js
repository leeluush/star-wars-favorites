import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';

function MovieList({ onMovieSelect, selectedMovie, backgroundImageUrl }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true); 
      try {
        
        const data = await fetchMovies();
        const sortedData = data.sort((a, b) => b.episode_id - a.episode_id).reverse();

        setMovies(sortedData);
      } catch (error) {
        console.error("Failed fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []); 

  return (
    <div>
        {isLoading ? (
            <Loading message="Loading Movies..."/>
        ) : (
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieItem
                    key={movie.episode_id}
          movie={movie}
          onMovieSelect={onMovieSelect}
          selectedBackgroundImageUrl={backgroundImageUrl} 
          isSelected={selectedMovie && movie.episode_id === selectedMovie.episode_id} 

                    />
                ))}
            </div>
        )}
    </div>
  );
}

export default MovieList;
