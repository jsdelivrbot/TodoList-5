import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkTodos } from '../actions/index';
import _ from 'lodash'

const DELAY = 1000;

class TodoList extends Component {
	constructor (props) {
		super(props);

		this.timerId;	
	}

	check = () => {
		checkTodos();
		this.timerId = setTimeout(this.check, DELAY);
	}

	componentDidMount() {
		this.timerId = setTimeout(this.check, DELAY);
	}

	componentWillUnmount() {
		clearTimeout(this.timerId);
	}

	renderTodos() {
		return _.map(this.props.todos, todo => {
			return (
				<li
					className="list-group-item"
					key={todo.id}
					style={{
      			textDecoration: todo.pending ? 'none' : 'line-through'
    			}}
				>
					<Link to={`/todos/${todo.id}`}>
						<div>{todo.title} | {todo.timeout.toString()}</div>
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
			<h3>To do:</h3>
			<ul className="list-group">
				{this.renderTodos()}
			</ul>
			<div className="text-xs-right">
				<Link className="btn btn-primary" to="/todos/new">
					New activity
				</Link>
			</div>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return { todos: state.todos };
}

export default connect(mapStateToProps, { checkTodos })(TodoList);