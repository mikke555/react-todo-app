import React, { Component } from 'react';

class Footer extends Component {
	getNumberLeft = () => {
		const uncompleted = this.props.todos.filter((todo) => todo.completed === false).length;
		if (uncompleted > 1) return `You have ${uncompleted} left`;
		if (uncompleted === 1) return `You have one left`;
		return `You completed all to-dos`;
	};

	getButtonLabel = () => {
		return this.props.showCompleted? 'Hide completed' : 'Show completed';
	}

	render() {
		const { todos, toggleCompleted, showCompleted } = this.props;

		return (
			<React.Fragment>
				{todos.length > 0 && (
					<footer className='Todo-footer'>
						<span>
							<button href='#' onClick={toggleCompleted}>
								{this.getButtonLabel()}
							</button>	
							{showCompleted
								? <i className='fas fa-caret-down' />
								: <i className='fas fa-caret-up' />
							}
						</span>

						<span>{this.getNumberLeft()}</span>
					</footer>
				)}
			</React.Fragment>
		);
	}
}

export default Footer;
