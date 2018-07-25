import axios from 'axios';

export const FETCH_TODOS = 'fetch_todos';
export const FETCH_TODO = 'fetch_todo';
export const DELETE_TODO = 'delete_todo';
export const CREATE_TODO = 'create_todo';

const ROOT_URL = 'http://localhost:8080';
const API = `${ROOT_URL}/api`;
const TODO_API = `${API}/todos`;

export function fetchTodos() {
	return {
		type: FETCH_ACTIVITIES,
	};
}

export function createTodo(values) {
	return {
		type: CREATE_TODO,
		payload: values
	};
}

export function fetchTodo(id) {
	return {
		type: FETCH_TODO,
		payload: id
	};
}

export function deleteTodo(id, callback) {
	callback();

	return {
		type: DELETE_TODO,
		payload: id
	};
}