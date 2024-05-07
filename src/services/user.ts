import { api } from './api';
import { IUserResponse } from '../Models/User.ts';

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<IUserResponse[], void>({
      query: () => ({
        url: '/users',
        method: 'get',
      }),
    }),
  }),
});

export const { useGetUsersQuery } = homeApi;
