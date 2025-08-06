import { useState } from 'react';
import TodoForm from './components/Todoform';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [alert, setAlert] = useState('');

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(''), 2500); // Auto close in 2.5s
  };

  const addTodo = (text) => {
    if (!text.trim()) {
      showAlert("🚫 Todo tidak boleh kosong!");
      return;
    }

    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 relative">
        {alert && (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-100 text-red-700 px-4 py-2 rounded-md shadow-md text-sm font-medium max-w-xs w-full text-center animate-in fade-in duration-300">
      {alert}
    </div>


        )}

        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">📝 Todo App</h1>
        <TodoForm onAdd={addTodo} />
        <ul className="mt-4 space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100 pr-1">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 italic">Belum ada todo</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
