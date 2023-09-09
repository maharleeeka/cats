import { useFetchMovies } from '../hooks/useFetchMovies';

export const MovieList = () => {
  const { movies } = useFetchMovies();
  console.log({ movies });
  return <div></div>;
};
