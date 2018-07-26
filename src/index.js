import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import TodoList from './containers/todo_list';
import TodoNew from './containers/todo_new';
import TodoShow from './containers/todo_show';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    	<BrowserRouter>
			<div>
				<Switch>
					<Route path="/todos/new" component={TodoNew} />
					<Route path="/todos/:id" component={TodoShow} />
					<Route path="/" component={TodoList} />
				</Switch>
			</div>
		</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
