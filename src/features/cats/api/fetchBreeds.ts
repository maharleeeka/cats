import { urls } from '@/constants/urls';

const fetchBreeds = () => {
  try {
    return fetch(`${urls.CAT}breeds`)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.log({ error });
  }
};

export default fetchBreeds;
