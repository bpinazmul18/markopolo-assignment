import { api } from './api';
import { IPostsResponse } from '../Models/Posts.ts';

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<IPostsResponse[], void>({
      query: () => ({
        url: '/posts',
        method: 'get',
      }),
    }),
  }),
});

export const { useGetPostsQuery } = homeApi;
