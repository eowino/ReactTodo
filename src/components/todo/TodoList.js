import React from 'react';

import { TodoListItem } from './TodoListItem';

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        { props.todos.map(todo =>
          <TodoListItem handleToggle={props.handleToggle}
          key={todo.id} {...todo}
          handleRemove={props.handleRemove}/>) }
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};
