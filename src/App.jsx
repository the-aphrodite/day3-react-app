import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]); // State to store the todos

  const addTodoItem = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
    };
    setTodos([...todos, newTodo]);
  }

  const deleteTodoItem = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column p-3">
      <div className=' w-50 border p-5 justify-content-center align-items-center flex-column rounded-3'>
        <h1 className=' text-center'>Todo App</h1>
        <br></br>
        <TodoForm addTodo={addTodoItem}/>
        <br></br>
        <TodoList todos={todos} deleteTodo={deleteTodoItem}/>

      </div>

    </div>
  )
}

export default App
