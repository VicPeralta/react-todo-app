import React from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  getNextId() {
    const { todos } = this.state;
    let nextId = 0;
    todos.forEach((todo) => {
      if (todo.id > nextId) nextId = todo.id;
    });
    return nextId + 1;
  }

  addTodoItem = (title) => {
    if (title === '') return;
    const newTodo = {
      id: this.getNextId(),
      title,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prev) => ({
      todos: [
        ...prev.todos.filter((todo) => todo.id !== id),
      ],
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList
          todos={todos}
          handlechangeProps={this.handleChange}
          handledeleteProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
