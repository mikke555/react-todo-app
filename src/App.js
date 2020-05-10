import React from 'react';
import Todos from './components/Todos';
import AddForm from './components/AddForm';
import uuid from 'uuid';
import Footer from './components/Footer';

class App extends React.Component {
	state = {
		todos: [
			{
				id: uuid(),
				content: 'mine 1000 minerals',
				completed: false
			},
			{
				id: uuid(),
				content: 'construct additional pylons',
				completed: false
			},
			{
				id: uuid(),
				content: 'mine some vespene gas',
				completed: false
			},
			{
				id: uuid(),
				content: 'build at least 20 zealots',
				completed: false
			},
			{
				id: uuid(),
				content: 'locate and destory all zerg hatcheries',
				completed: false
			},
			{
				id: uuid(),
				content: 'return to Aiur',
				completed: false
			}
		],
		showCompleted: true
	};

	addTodo = (content) => {
		const newTodo = {
			id: uuid(),
			content,
			completed: false
		};
		this.setState({ todos: [ ...this.state.todos, newTodo ] });
	};

	toggleComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	deleteTodo = (id) => {
		this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
	};

	toggleCompleted = () => {
		if (this.state.todos.filter((todo) => todo.completed).length === 0) return;

		this.setState({
			showCompleted: !this.state.showCompleted
		});
	};

	render() {
		return (
			<div className='app-container'>
				<AddForm addTodo={this.addTodo} numTodos={this.state.todos.length} />
				<Todos
					todos={this.state.todos}
					toggleComplete={this.toggleComplete}
					deleteTodo={this.deleteTodo}
					toggleCompleted={this.toggleCompleted}
					showCompleted={this.state.showCompleted}
				/>
				<Footer
					todos={this.state.todos}
					toggleComplete={this.toggleComplete}
					deleteTodo={this.deleteTodo}
					toggleCompleted={this.toggleCompleted}
					showCompleted={this.state.showCompleted}
				/>
			</div>
		);
	}
}

export default App;
