import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
    // https://bike-rental-service-for-tourists-or-locals.vercel.app/
    // credentials: 'include',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
