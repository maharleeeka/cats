import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CatModel } from '../features/cats/types';
import { urls } from '@/constants/urls';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({ baseUrl: urls.CAT }),
  endpoints: (builder) => ({
    getCats: builder.query<CatModel[], void>({
      query: () =>
        `images/search?limit=20&api_key=${import.meta.env.VITE_API_KEY}`,
    }),
  }),
});

export const { useGetCatsQuery } = catApi;
