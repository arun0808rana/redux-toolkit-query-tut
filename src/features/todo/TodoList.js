import React, { useEffect, useState } from 'react'
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from '../api/apiSlice';

function TodoList() {
    // local states
    const [newTodo, setNewTodo] = useState({});

    // hooks
    const {
        // renaming data as todos
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetTodosQuery();
    const [addTodo] = useAddTodoMutation();

    // add todo
    const handleAddTodo = () => {
        addTodo({
            "id": uuidv4(),
            "title": newTodo,
            "completed": false
        })
        setNewTodo({})
    }

    // utility functions
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    return (
        <div>
            <div className="flex">
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div>{todos ?
                todos.map(todo => {
                    return (
                        <div key={todo.id} className='todo-container'>
                            <li>{todo.title}</li>
                            <button>Delete</button>
                            <button>Edit</button>
                        </div>
                    )
                }) : 'Loading...'
            }</div>
        </div>
    )
}

export default TodoList 