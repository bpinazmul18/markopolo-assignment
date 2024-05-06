import { api } from './api';
import { IGetCommentsResponse } from '../Models/Comments.ts';

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<IGetCommentsResponse[], void>({
      query: () => ({
        url: '/comments?_start=1&_limit=4',
        method: 'get',
      }),
    }),
  }),
});

export const { useGetCommentsQuery } = homeApi;
