import React from 'react';
import { partial } from '../../lib/utils';

export const TodoListItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);
  return (
    <li>
      <span className="delete-item"><a onClick={handleRemove}>X</a></span>
      <input type="checkbox" onChange={handleToggle}
      checked={props.isCompleted}/>
      {props.name}
    </li>
  );
};

TodoListItem.propTypes = {
  isCompleted: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired
};
