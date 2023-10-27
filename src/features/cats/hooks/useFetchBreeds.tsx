import { fetchBreeds } from '../api';

export const useFetchBreeds = () => {
  const fetchCatBreeds = () => {
    try {
      return fetchBreeds();
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    fetchCatBreeds,
  };
};
