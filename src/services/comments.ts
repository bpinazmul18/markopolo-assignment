import { api } from './api';
import { IGetCommentsResponse } from '../Models/Comments.ts';

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<IGetCommentsResponse[], { _start: number; limit: number }>({
      query: ({ _start, limit }) => ({
        url: '/comments?_start=1&_limit=4',
        method: 'get',
        params: {
          _start,
          limit,
        },
      }),
    }),
  }),
});

export const { useGetCommentsQuery } = homeApi;
