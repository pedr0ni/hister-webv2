import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { AppBody } from './components/AppBody';
import UsersScreen from './views/UsersScreen';

function App() {

	return (
		<AppBody>
			<Switch>
				<Route path='/users'>
					<UsersScreen></UsersScreen>
				</Route>
			</Switch>
		</AppBody>
	);
}

export default App;
