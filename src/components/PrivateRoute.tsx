import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import UserService from '../services/UserService'

export interface IPrivateRouteProps extends RouteProps { }

export const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
	const [logged, setLogged] = React.useState(UserService.getToken())

	return logged ? (
		<Route {...props} component={props.component} render={undefined} />
	) : (
		<Redirect to="/login" />
	)
}