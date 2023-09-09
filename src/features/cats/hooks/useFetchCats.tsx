import { useState, useEffect } from 'react';
import { fetchCats } from '../api';
import { FetchCatResponse } from '../types';

export const useFetchCats = () => {
  const [cats, setCats] = useState<FetchCatResponse[]>();

  const fetchCatList = async () => {
    return await fetchCats()?.then((data) => data);
  };

  useEffect(() => {
    fetchCatList();
  }, []);
  return { cats, setCats, fetchCatList };
};
