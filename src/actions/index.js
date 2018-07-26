import axios from 'axios';

export const DELETE_TODO = 'delete_todo';
export const CREATE_TODO = 'create_todo';
export const CHECK_TODOS = 'check_todo'
//export const FETCH_TODOS = 'fetch_todos';
//export const FETCH_TODO = 'fetch_todo';

let nextTodoId = 0;

export function checkTodos() {
	return {
		type: CHECK_TODOS
	}
}

export function createTodo(values) {

	values.id = nextTodoId++;

	return {
		type: CREATE_TODO,
		payload: values
	};
}

export function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		payload: id
	};
}

export function fetchTodos() {
	return {
		type: FETCH_TODOS,
	};
}

export function fetchTodo() {
	return {
		type: FETCH_TODO,
	};
}