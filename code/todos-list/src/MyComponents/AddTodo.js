import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('needs to do something');
    } else {
      props.addTodo(title, desc);
      setTitle('');
      setDesc('');
    }
  };
  return (
    <div className="container-2">
      <div className="w-full max-w-xs">
        <form
          onSubmit={submit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h3 className="text-2xl font-bold text-blue-500">Add a Todo</h3>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Todo title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter todo title"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="desc"
            >
              Todo Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="desc"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              type="text"
              placeholder="Enter todo description"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
