import React, { useEffect, useState } from 'react'
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from '../api/apiSlice';

function TodoList() {
    // local states
    const [newTodo, setNewTodo] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editingID, setEditingID] = useState();

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
        // setNewTodo({})
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

    // init editing
    const handleEditing = (e) => {
        setIsEditing(true);
        setEditingID(e.target.getAttribute("data-id"))
        console.log(e.target.getAttribute("data-id"), 'id')
    }

    // save edited todo
    const handleEdited = (e) => {
        // handleUpdateTodo()
    }

    // mark completed
    const handleCompletion = (e) => {
        updateTodo({
            "id": e.target.getAttribute("data-id"),
            "title": e.target.getAttribute("data-title"),
            "completed": true
        })
    }

    // utility functions
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    // todo: complete this edtingin function
    return (
        <div>
            <div className="flex newtodo-container">
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <div>{todos ?
                todos.map(todo => {
                    return (
                        <div key={todo.id} className='todo-container'>
                            <div className='todo-title'>
                                <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.title}</li>
                                {
                                    ((editingID == todo.id) && isEditing) ? <div>
                                        <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
                                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                                        <button onClick={handleEdited}>Save</button>
                                    </div> : null
                                }
                            </div>
                            <div className="buttons flex">
                                {todo.completed ? null : <button data-id={todo.id} data-completed={todo.completed} onClick={handleEditing}>Edit</button>}
                                <button data-id={todo.id} onClick={handleDeletTodo}>Delete</button>
                                <button data-id={todo.id} data-title={todo.title} onClick={handleCompletion}>Done</button>
                            </div>
                        </div>
                    )
                }) : 'Loading...'
            }</div>
        </div>
    )
}

export default TodoList 