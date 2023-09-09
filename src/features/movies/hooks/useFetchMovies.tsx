import { useState, useEffect } from 'react';
import { fetchMovies } from '../api';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState();

  const fetchMovieList = async () => {
    const movieList = await fetchMovies();
    setMovies(movieList);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
  return { movies };
};
