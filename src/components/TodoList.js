import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.PureComponent {
  render() {
    const { todos } = this.props;
    const { handlechangeProps } = this.props;
    const { handledeleteProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handlechangeProps={handlechangeProps}
            handledeleteProps={handledeleteProps}
          />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  handlechangeProps: PropTypes.func.isRequired,
  handledeleteProps: PropTypes.func.isRequired,
};
export default TodoList;
