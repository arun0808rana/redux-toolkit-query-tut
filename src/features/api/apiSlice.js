import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081' }),
    tagTypes:['Todos'],
    endpoints: (builder) => {
        return {
            // builder.query means we are just querying the db, since the default GET method
            getTodos: builder.query({
                query: () => '/todos',
                providesTags:['Todos']
            }),
            //  builder.mutation means we are actually changing the data at db, since it is POST method
            // The same will be done for other crud ops that are responsible for a change in db
            addTodo: builder.mutation({
                query: (todo) => ({
                    url: '/todos',
                    method: 'POST',
                    body: todo
                }),
                invalidatesTags: ['Todos']
            }),
            updateTodo: builder.mutation({
                query: (todo) => ({
                    url: `/todos/${todo.id}`,
                    method: 'PATCH',
                    body: todo
                })
            }),
            deleteTodo: builder.mutation({
                query: (todo) => ({
                    url: `/todos/${todo.id}`,
                    method: 'DELETE',
                    body: todo.id
                })
            })
        }
    }
})

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice;