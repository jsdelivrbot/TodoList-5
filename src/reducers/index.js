import { combineReducers } from 'redux';
import TodoReducer from './todos_reducer';

const rootReducer = combineReducers({
  todos: TodoReducer
});

export default rootReducer;
