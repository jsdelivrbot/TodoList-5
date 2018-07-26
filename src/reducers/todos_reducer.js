import { DELETE_TODO, CREATE_TODO, CHECK_TODOS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
		case DELETE_TODO:
			return _.omit(state, action.payload);
		case CREATE_TODO:
			return {...state, [action.payload.id] : action.payload };
		case CHECK_TODOS:
			_.map(state, element =>	element.pending = (element.timeOut < Date.now()));
		default:
			return state;
	}
}