import { urls } from '../../../constants/urls';

export const fetchMovies = () => {
  try {
    return fetch(
      `${urls.CAT}images/search?limit=10&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
    )
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.log({ error });
  }
};