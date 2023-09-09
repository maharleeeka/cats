import { useState, useEffect } from 'react';
import { fetchCats } from '../api';
import { FetchCatResponse } from '../types';

export const useFetchCats = () => {
  const [cats, setCats] = useState<FetchCatResponse[]>();

  const fetchCatList = async () => {
    const catList = await fetchCats()?.then((data) => data);
    if (catList) setCats(catList);
  };

  useEffect(() => {
    fetchCatList();
  }, []);
  return { cats };
};
