import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081' }),
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                query: () => '/todos'
            })
        }
    }
})

export const { useGetTodosQuery } = apiSlice;