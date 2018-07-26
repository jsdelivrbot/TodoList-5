export const DELETE_TODO = 'delete_todo';
export const CREATE_TODO = 'create_todo';
export const CHECK_TODOS = 'check_todos'

let nextTodoId = 0;

export function checkTodos() {
	return {
		type: CHECK_TODOS,
		payload: {}
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