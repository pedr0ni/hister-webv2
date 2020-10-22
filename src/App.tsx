import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import { AppBody } from './components/AppBody';
import { PrivateRoute } from './components/PrivateRoute';
import BookCreateScreen from './views/BookCreateScreen';
import BooksScreen from './views/BooksScreen';
import { DashboardScreen } from './views/DashboardScreen';
import SignIn from './views/LoginScreen';
import { OrdersScreen } from './views/OrdersScreen';
import UserCreateScreen from './views/UserCreateScreen';
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
				<PrivateRoute exact path='/users/create'>
					<AppBody>
						<UserCreateScreen />
					</AppBody>
				</PrivateRoute>

				<PrivateRoute exact path='/orders'>
					<AppBody>
						<OrdersScreen />
					</AppBody>
				</PrivateRoute>

				<PrivateRoute exact path='/books'>
					<AppBody>
						<BooksScreen />
					</AppBody>
				</PrivateRoute>

				<PrivateRoute exact path='/books/create'>
					<AppBody>
						<BookCreateScreen />
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
