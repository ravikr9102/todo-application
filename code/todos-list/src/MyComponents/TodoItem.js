import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="container">
        <h1 className="text-2xl font-bold text-red-900">{todo.title}</h1>
        <p className="text-1.5xl font-bold text-green-900">{todo.desc}</p>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>

      <hr />
    </>
  );
};
