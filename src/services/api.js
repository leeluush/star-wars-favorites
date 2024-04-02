import axios from 'axios';

const swapi = axios.create({
  baseURL: 'https://swapi.dev/api/'
});

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMMDB_API = "8cd5db7af4ab449f2c10a980c075d8c4"

export const fetchMovies = async () => {
  const response = await swapi.get('films/');
  return response.data.results;
};


export const fetchMovieImage = async (title) => {
  if (!title) return 'default-background.png';

  try {
    const queryTitle = title.split(' ').join('+');
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie?api_key=${TMMDB_API}&query=${queryTitle}`);
    if (response.data.results.length) {
      const tmdbMovie = response.data.results[0];
      const backdropPath = tmdbMovie.backdrop_path;
      return `https://image.tmdb.org/t/p/w500${backdropPath}`;
    } else {
      return 'default-background.png';
    }
  } catch (error) {
    console.error('Error fetching image from TMDB:', error);
    return 'default-background.png';
  }
};
