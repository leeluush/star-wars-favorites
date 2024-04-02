import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import useFetchMovieImage from './hooks/useFetchMovieImage'; 
import './App.css';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  const backgroundImageUrl = useFetchMovieImage(selectedMovie?.title);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App" style={{ '--appBackgroundImage': `url(${backgroundImageUrl})` }}>
      <div className="content-container">
        <MovieDetails
          movie={selectedMovie}
          favorites={favorites}
          onFavoriteToggle={setFavorites}
          backgroundImageUrl={backgroundImageUrl}

        />
        <MovieList onMovieSelect={handleMovieSelect}
          selectedMovie={selectedMovie}
          backgroundImageUrl={backgroundImageUrl} 
        />
      </div>
    </div>
  );
}

export default App;
