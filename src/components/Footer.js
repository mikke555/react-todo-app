import React, { Component } from 'react';

class Footer extends Component {
	numUncompleted = () => {
		const uncompleted = this.props.todos.filter((todo) => todo.completed === false).length;
		if (uncompleted > 1) return `You have ${uncompleted} left`;
		if (uncompleted === 1) return `You have one left`;
		return `You completed all to-dos`;
	};

	render() {
		return (
			<React.Fragment>
				{this.props.todos.length > 0 && (
					<footer className='Todo-footer'>
						<span>
							<button href='#' onClick={this.props.toggleCompleted}>
								{this.props.showCompleted ? `Hide completed` : `Show completed`}
							</button>
							{this.props.showCompleted ? (
								<i className='fas fa-caret-down' />
							) : (
								<i className='fas fa-caret-up' />
							)}
						</span>

						<span>{this.numUncompleted()}</span>
					</footer>
				)}
			</React.Fragment>
		);
	}
}

export default Footer;
