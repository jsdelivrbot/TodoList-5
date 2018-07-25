import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash'

class TodoList extends Component {
	renderPosts() {
		return _.map(this.props.todos, todo => {
			return (
				<li className="list-group-item" key={todo.id}>
					<Link to={`/todos/${todo.id}`}>
						{todo.title}
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
					New 'to do' activity
				</Link>
			</div>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return { todos: state.todos };
}

export default connect(mapStateToProps, { fetchTodos })(TodoList);