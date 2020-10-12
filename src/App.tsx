import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import { AppBody } from './components/AppBody';
import UserDetailScreen from './views/UserDetailScreen';
import UsersScreen from './views/UsersScreen';

function App() {

	return (
		<BrowserRouter>
			<AppBody>
				<Switch>
					<Route exact path='/users'>
						<UsersScreen></UsersScreen>
					</Route>
					<Route exact path='/users/detail/:id'>
						<UserDetailScreen></UserDetailScreen>
					</Route>
				</Switch>
			</AppBody>
		</BrowserRouter>
	);
}

export default App;
