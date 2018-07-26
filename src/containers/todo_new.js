import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTodo } from '../actions'; 

class TodoNew extends Component {
	renderField(field) {
		const { meta: {  touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		return (
			<div className={className}>
			<label>{field.label}</label>
				<input 
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					<i><small>{field.helpText}</small></i>
				</div>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		values.timeout = Date.parse(values.timeout);
		values.pending = (values.timeout > Date.now());
		this.props.createTodo(values);
		this.props.history.push('/')
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			<Field 
				label="Title"
				name="title"
				helpText=""
				component={this.renderField}
			/>
			<Field 
				label="Time out"
				name="timeout"
				helpText="Hint: Date format is YYYY-MM-DDTHH:mm"
				component={this.renderField}
			/>
			<Field
				label="Todo description" 
				name="description"
				helpText=""
				component={this.renderField}
			/>
			<button type="submit" className="btn btn-primry">Submit</button>
			<Link className="btn btn-danger" to="/">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	let recievedDate = Date.parse(values.timeout);

	// Validate the input
	if(!values.title) {
		errors.title = "Enter a title!"
	}
	if(!values.timeout || isNaN(recievedDate) || values.timeout >= Date.now()) {
		errors.timeout = "The timeout field is inappropriate!"
	}
	if(!values.description) {
		errors.description = "Enter the description!"
	}

	// if errors is empty, the form is fine to submit
	// if errors has any properties, redux-form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'TodosNewForm'
})(
	connect(null, { createTodo })(TodoNew)
);