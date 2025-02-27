import React from 'react'

function TodoItem({todo, deleteTodo}) {
  return (
    <>
    <div className="border p-3 rounded-3 d-flex justify-content-between align-items-center">
        <div>
            <strong>{todo.title}</strong>
            <p>{todo.description}</p>
        </div>
        <button className=' btn btn-danger' onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
    <br></br>
    </>
  )
}

export default TodoItem
