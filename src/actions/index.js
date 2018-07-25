import axios from 'axios';

export const FETCH_TODOS = 'fetch_todos';
export const FETCH_TODO = 'fetch_todo';
export const DELETE_TODO = 'delete_todo';
export const CREATE_TODO = 'create_todo';

const ROOT_URL = 'http://localhost:8080';
const API = `${ROOT_URL}/api`;
const TODO_API = `${API}/todos`;

export function fetchTodos() {
	const request = axios.get(`${ROOT_URL}/todos${API_KEY}`);

	return {
		type: FETCH_ACTIVITIES,
		payload: request
	};
}

export function createTodo(values, callback) {
	const request = axios.post(`${ROOT_URL}/todos${API_KEY}`, values)
		.then(() => callback());

	return {
		type: CREATE_TODO,
		payload: request
	};
}

export function fetchTodo(id) {
	const request = axios.get(`${ROOT_URL}/todos/${id}${API_KEY}`);

	return {
		type: FETCH_TODO,
		payload: request
	};
}

export function deleteTodo(id, callback) {
	axios.delete(`${ROOT_URL}/todos/${id}${API_KEY}`)
		.then(() => callback());

	return {
		type: DELETE_TODO,
		payload: id
	};
}