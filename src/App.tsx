import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import { AppBody } from './components/AppBody';
import UsersScreen from './views/UsersScreen';

function App() {

	return (
		<BrowserRouter>
			<AppBody>
				<Switch>
					<Route path='/users'>
						<UsersScreen></UsersScreen>
					</Route>
				</Switch>
			</AppBody>
		</BrowserRouter>
	);
}

export default App;
