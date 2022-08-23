import React, { useEffect } from 'react'
import { useGetTodosQuery } from '../api/apiSlice';

function TodoList() {
    const {
        // renaming data as todos
        data: todos,
        isError,
        isLoading,
        isSuccess,
        error,
    } = useGetTodosQuery();
    console.log(todos, 'todos')
    return (
        <div>TodoList</div>
    )
}

export default TodoList 