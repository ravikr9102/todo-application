import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
  return (
    <div className="container">
      <div className="item">
        <h2 className="text-center text-3xl font-bold text-blue-900 my-0.5">
          Todos List!
        </h2>
        {props.todos.length === 0
          ? 'No Todos to display'
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </div>
  );
};
