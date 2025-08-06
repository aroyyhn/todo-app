import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 border-2 border-purple-300 focus:border-purple-500 outline-none px-3 py-2 rounded-lg shadow-sm transition-all"
        type="text"
        placeholder="Tambah todo baru..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow transition-all">
        Tambah
      </button>
    </form>
  );
}
