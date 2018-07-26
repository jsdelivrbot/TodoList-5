import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkTodos } from '../actions/index';
import _ from 'lodash'
import { bindActionCreators } from 'C:/Users/Vitaliy.Pankov/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';

const DELAY = 1000;

class TodoList extends Component {
	constructor (props) {
		super(props);

		this.timerId;	
	}

	check = () => {
		this.props.checkTodos();
		console.log('I\'m working...');
		this.timerId = setTimeout(this.check, DELAY);
	}

	componentDidMount() {
		this.timerId = setTimeout(this.check, DELAY);
	}

	componentWillUnmount() {
		clearTimeout(this.timerId);
	}
	
	formatDate(todo) {
		let timeout = new Date(todo.timeout);

		return timeout.toString();
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
						<div>{todo.title} | {this.formatDate(todo)}</div>
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

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ checkTodos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);