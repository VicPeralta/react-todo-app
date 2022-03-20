import React from 'react';
import PropTypes from 'prop-types';

class InputTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    addTodoProps(title);
    this.setState({
      title: '',
    });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="Add Todo..." onChange={this.onChange} value={title} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
