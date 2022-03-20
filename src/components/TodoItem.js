import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  const { handlechangeProps } = props;
  const { handledeleteProps } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handlechangeProps(todo.id)}
      />
      <button type="button" onClick={() => handledeleteProps(todo.id)}>Delete</button>
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handlechangeProps: PropTypes.func.isRequired,
  handledeleteProps: PropTypes.func.isRequired,
};
export default TodoItem;
