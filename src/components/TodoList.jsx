import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, deleteTodo}) {
    return (
        <div>
            <h4 className=' text-center'>TodoList</h4>
            {todos.length === 0 ? <p>no todos yet!</p> : null}
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
                ))}
        </div>
    )
}

export default TodoList

