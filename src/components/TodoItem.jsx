export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-purple-100 hover:bg-purple-200 transition-all p-3 rounded-lg shadow-sm">
      <span
        onClick={onToggle}
        className={`flex-1 cursor-pointer transition-all select-none ${
          todo.done ? 'line-through text-gray-400 italic' : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={onDelete}
        className="ml-4 text-red-500 hover:text-red-700 transition"
      >
        ❌
      </button>
    </li>
  );
}
