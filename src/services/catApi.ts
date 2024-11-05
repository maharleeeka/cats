import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseParams, CatModel } from '../features/cats/types';
import { urls } from '@/constants/urls';

export const catApi = createApi({
  reducerPath: 'catApi',
  baseQuery: fetchBaseQuery({
    baseUrl: urls.CAT,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', import.meta.env.VITE_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCats: builder.query<CatModel[], BaseParams>({
      query: ({ limit, page }) =>
        `images/search?limit=${limit}&page=${page}&has_breeds=false`,
    }),
  }),
});

export const { useGetCatsQuery, useLazyGetCatsQuery } = catApi;
