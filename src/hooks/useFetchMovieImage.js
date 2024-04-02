import { useState, useEffect } from 'react';
import { fetchMovieImage } from '../services/api' 

const useFetchMovieImage = (title, apiKey) => {
  const [imageUrl, setImageUrl] = useState('default-background.png');

  useEffect(() => {
    const fetchImage = async () => {
      const url = await fetchMovieImage(title, apiKey);
      setImageUrl(url);
    };

    fetchImage();
  }, [title, apiKey]);

  return imageUrl;
};

export default useFetchMovieImage;
