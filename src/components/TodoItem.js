import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  render() {
    const { todo } = this.props;
    return (
      <p>{todo.title}</p>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};
export default TodoItem;
