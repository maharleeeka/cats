import { useState, useEffect } from 'react';
import { fetchCats } from '../api';

export const useFetchCats = () => {
  const [cats, setCats] = useState();

  const fetchCatList = async () => {
    const catList = await fetchCats();
    setCats(catList);
  };

  useEffect(() => {
    fetchCatList();
  }, []);
  return { cats };
};
