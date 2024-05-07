import { api } from './api';
import { IGetCommentsResponse } from '../Models/Comments.ts';

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<IGetCommentsResponse[], { _start: number; limit: number }>({
      query: ({ _start, limit }) => ({
        url: `/comments?_start=${_start}&_limit=${limit}`,
        method: 'get',
      }),
    }),
  }),
});

export const { useGetCommentsQuery } = homeApi;
