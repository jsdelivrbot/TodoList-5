import { FETCH_TODOS, FETCH_TODO, DELTE_TODO } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_TODOS:
			return _.mapKeys(action.payload.data, 'id');
		case FETCH_TODO:
			//const TODO = action.payload;
			//const newState = { ... state };
			//newState[TODO.id] = TODO;
			//return newState;
			return { ...state, [action.payload.data.id]: action.payload.data };
		case DELTE_TODO:
			return _.omit(state, action.payload.data);
		default:
			return state;
	}
}