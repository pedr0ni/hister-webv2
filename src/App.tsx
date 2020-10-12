import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import { AppBody } from './components/AppBody';
import { PrivateRoute } from './components/PrivateRoute';
import { DashboardScreen } from './views/DashboardScreen';
import SignIn from './views/LoginScreen';
import UserDetailScreen from './views/UserDetailScreen';
import UsersScreen from './views/UsersScreen';

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<PrivateRoute exact path="/">
					<AppBody>
						<DashboardScreen />
					</AppBody>
				</PrivateRoute>
				<PrivateRoute exact path="/users">
					<AppBody>
						<UsersScreen></UsersScreen>
					</AppBody>
				</PrivateRoute>
				<PrivateRoute exact path='/users/detail/:id'>
					<AppBody>
						<UserDetailScreen></UserDetailScreen>
					</AppBody>
				</PrivateRoute>
				<Route exact path='/login'>
					<SignIn></SignIn>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
