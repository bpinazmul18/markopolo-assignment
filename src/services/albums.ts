import { api } from './api';
import { IAlbumsResponse } from '../Models/Albums.ts';

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAlbums: builder.query<IAlbumsResponse[], void>({
      query: () => ({
        url: '/albums',
        method: 'get',
      }),
    }),
  }),
});

export const { useGetAlbumsQuery } = homeApi;
