import React, { useEffect } from 'react'
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from '../api/apiSlice';

function TodoList() {
    const {
        // renaming data as todos
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTodosQuery();
    console.log(todos, 'todos')
    return (
        <div>{
            todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li>{todo.title}</li>
                        <button>Delete</button>
                        <button>Edit</button>
                    </div>
                )
            })
        }</div>
    )
}

export default TodoList 