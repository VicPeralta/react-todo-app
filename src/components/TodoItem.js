import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = (props) => {
  const { todo, handlechangeProps, handledeleteProps } = props;
  const { completed } = todo;
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => handlechangeProps(todo.id)}
      />
      <span style={completed ? completedStyle : null}>

        {todo.title}
      </span>
      <button type="button" onClick={() => handledeleteProps(todo.id)}>
        <FaTrash />
      </button>
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
