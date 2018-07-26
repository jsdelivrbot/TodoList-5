import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions'
import { Link } from 'react-router-dom';

class TodoShow extends Component {
	onDeleteClick() {
		const { id } = this.props.match.params;

		this.props.deleteTodo(id);

		this.props.history.push('/');
	}

	render() {
		const { todo } = this.props;

		if (!todo) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to the list of activities</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete activity
				</button>
				<h3>{todo.title}</h3>
				<h6>Time out: {todo.timeout}</h6>
				<p>{todo.description}</p>
			</div>
		);
	}
}

function mapStateToProps({ todos }, ownProps) {
	return { todo: todos[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { deleteTodo })(TodoShow);