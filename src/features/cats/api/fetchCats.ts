import { urls } from '@/constants/urls';
import { FetchCatResponse } from '../types';

const fetchCats = () => {
  try {
    return fetch(
      `${urls.CAT}images/search?limit=20&api_key=${
        import.meta.env.VITE_API_KEY
      }`,
    )
      .then((response) => response.json())
      .then((data) => data as FetchCatResponse[]);
  } catch (error) {
    console.log({ error });
  }
};

export default fetchCats;
