import React, { Component } from 'react';
import logo from './logo.svg';
import { TodoForm, TodoList, Footer } from './components/todo';
import { addTodo, generateID, findbyId, toggleTodo, updateTodo, removeTodo, filterTodos } from './lib/TodoHelpers';
import './App.css';
import { pipe, partial } from './lib/utils';
import { loadTodos, creatTodo, saveTodo, destroyTodo } from './lib/todoService';

class App extends Component {
  // set todos to [] once you have an endpoint serving todos - see npm lib json-server
  state = {
    todos: [
      {id: 1, name:"Clean room", isCompleted: true},
      {id: 2, name:"Walk the cat", isCompleted: false},
      {id: 3, name:"Learn React", isCompleted: false}
    ],
    currentTodo: ''
  };

  static contextTypes = {
    route: React.PropTypes.string
  }

  // uncomment once you have an endpoint serving todos - see npm lib json-server
  // componentDidMount() {
  //   loadTodos()
  //     .then(todos => this.setState({todos}));
  // }

  handleToggle = (id) => {
    // const todo = findbyId(id, this.state.todos);
    // const toggled = toggleTodo(todo);
    // const updateTodos = updateTodo(this.state.todos, toggled);
    // or
    const getToggledTodo = pipe(findbyId, toggleTodo);
    const updated = getToggledTodo(id, this.state.todos)
    const getUpdatedTodos =  partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated);
    this.setState({
      todos: updatedTodos
    })
    saveTodo(updated)
      .then(() => this.showTempMessage('Todo Updated'));
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo: event.target.value
    })
  }

  handleRemove = (id, event) => {
    event.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({todos: updatedTodos})
    destroyTodo(id)
      .then(() => this.showTempMessage('Todo Removed'));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const todoID = generateID();
    const todo = {id: todoID, name: this.state.currentTodo, isCompleted:false};
    const newTodos = addTodo(this.state.todos, todo);
    this.setState({
      todos: newTodos,
      currentTodo: '',
      error: ''
    });

    // uncomment once you have an endpoint serving todos - see npm lib json-server
    // creatTodo(newTodo)
    //   .then(() => this.showTempMessage('Todo added');
  }

  showTempMessage = (msg) => {
    this.setState({message: msg});
    setTimeout(() => this.setState({message: ''}), 2500);
  }

  // if invoked, user is trying to submit an empty todo
  handleErrorSubmit = (event) => {
    event.preventDefault();
    this.setState({
      error: 'Please provide a todo name'
    });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleErrorSubmit;
    const displayTodos = filterTodos(this.state.todos, this.context.route);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          {this.state.error && <span className="error">{this.state.error}</span>}
          // uncomment once you have an endpoint serving todos - see npm lib json-server
          // {this.state.message && <span className="success">{this.state.message}</span>}
          <TodoForm handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={submitHandler}/>
          <TodoList handleToggle={this.handleToggle}
          todos={displayTodos}
          handleRemove={this.handleRemove}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
