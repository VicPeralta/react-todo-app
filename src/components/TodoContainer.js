import React from 'react';
import TodoList from './TodoList';
import Header from './Header';

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
    console.log(id);
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
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
