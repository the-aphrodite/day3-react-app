import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoDetails from './components/TodoDetails';

function App() {
  const [todos, setTodos] = useState([]); // State to store the todos
  const [filter, setFilter] = useState('All'); // State to filter todos based on status

  const addTodoItem = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      status: 'In Progress', // DEF
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoItem = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: newStatus } : todo)));
  };

  return (
    <Router>
      <div className="d-flex justify-content-center align-items-center flex-column p-3">
        <Routes>
          {/* >>>>>>>>>>Home Page<<<<<<<<<<<<< */}
          <Route path="/" element={
            <div className="w-50 border p-5 rounded-3">
              <h1 className="text-center">Todo App</h1>
              <br />
              <TodoForm addTodo={addTodoItem} />
              <br />
              <div className="d-flex justify-content-center mb-3">
                {['All', 'In Progress', 'Completed'].map((status) => (
                  <button
                    key={status}
                    className={`btn me-2 ${filter === status ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setFilter(status)}>
                    {status}
                  </button>
                ))}
              </div>
              <TodoList todos={todos} deleteTodo={deleteTodoItem} changeStatus={changeStatus} filter={filter} />
            </div>
          } />
          
          <Route path="/todo/:id" element={<TodoDetails todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

