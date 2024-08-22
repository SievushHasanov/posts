import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostType } from '../types/postsTypes';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostType[], void>({
      query: () => 'posts?_limit=12',
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
