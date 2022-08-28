import React, { useEffect, useState } from 'react'
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from '../api/apiSlice';

function TodoList() {
    // local states
    const [newTodo, setNewTodo] = useState({});
    const [isEditing, setIsEditing] = useState(false);

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
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    // add todo
    const handleAddTodo = () => {
        addTodo({
            "id": uuidv4(),
            "title": newTodo,
            "completed": false
        })
        setNewTodo({})
    }

    // update todo
    const handleUpdateTodo = () => {
        updateTodo({
            "id": uuidv4(),
            "title": newTodo,
            "completed": false
        })
        setNewTodo({})
    }

    // delete todo
    const handleDeletTodo = (e) => {
        console.log("id", e.target.getAttribute("data-id"))
        deleteTodo(e.target.getAttribute("data-id"))
        setNewTodo({});
    }

    const handleEditing = (e) => {
        setIsEditing(!isEditing);
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
                            <div>
                                <li>{todo.title}</li>
                                {/* todo: complete this */}
                                <input type="text" onChange={handleEditing} />
                            </div>
                            <button data-id={todo.id} onClick={handleDeletTodo}>Delete</button>
                            <button>Edit</button>
                        </div>
                    )
                }) : 'Loading...'
            }</div>
        </div>
    )
}

export default TodoList 