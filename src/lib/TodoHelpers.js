import React from 'react';

export const addTodo = (todos, todo) => todos.concat(todo); // or [...todos todo]

export const generateID = () => Math.floor(Math.random() * 1000);

export const findbyId = (id, todos) => todos.find( todo => id === todo.id);

export const toggleTodo = (todo) => ({...todo, isCompleted: !todo.isCompleted});

export const updateTodo = (startTodos, updatedTodo) => {
    const updatedIndex = startTodos.findIndex(todo => todo.id === updatedTodo.id);
    return [
      ...startTodos.slice(0, updatedIndex),
      updatedTodo,
      ...startTodos.slice(updatedIndex + 1)
    ];
};

export const removeTodo = (startTodos, id) => {
    const removeIndex = startTodos.findIndex(todo => todo.id === id);
    return [
      ...startTodos.slice(0, removeIndex),
      ...startTodos.slice(removeIndex + 1)
    ];
};

export const filterTodos = (todos, route) => {
  switch (route) {
    case '/active':
      return todos.filter(item => !item.isCompleted)
      break;
    case '/complete':
      return todos.filter(item => item.isCompleted)
      break;
    default:
      return todos;

  }
};

addTodo.propTypes = {
  todos: React.PropTypes.array,
  todo: React.PropTypes.object
};

findbyId.propTypes = {
  todos: React.PropTypes.array,
  id: React.PropTypes.number
};

toggleTodo.propTypes = {
  todo: React.PropTypes.object
};

updateTodo.propTypes = {
  startTodos: React.PropTypes.array,
  updatedTodo: React.PropTypes.object,
};
