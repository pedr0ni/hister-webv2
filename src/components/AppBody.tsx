import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Home, ImportContacts, Menu, People } from '@material-ui/icons';

import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const AppBody: React.FC = ({children}) => {
	const classes = useStyles();

	const [isOpen, setOpen] = React.useState(false)

	const toggleDrawer = (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {

		console.log('Should toggle')

		setOpen(!isOpen)
	};

	const list = () => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer}
			onKeyDown={toggleDrawer}
		>
			<List>
				<ListItem button key="Home">
					<ListItemIcon><Home /></ListItemIcon>
					<Link className='no-style-link' to='/'>
						<ListItemText primary="Home" />
					</Link>
				</ListItem>

				<ListItem button key="Usuários">
					<ListItemIcon><People /></ListItemIcon>
					<Link className='no-style-link' to='/users'>
						<ListItemText primary="Usuários" />
					</Link>
				</ListItem>

				<ListItem button key="Livros">
					<ListItemIcon><ImportContacts /></ListItemIcon>
					<Link className='no-style-link' to='/books'>
						<ListItemText primary="Livros" />
					</Link>
				</ListItem>
			</List>
		</div>
	);

	return (
		<Router>
			<React.Fragment key={'left'}>
				<Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer}>
					{list()}
				</Drawer>
			</React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer} color="inherit" aria-label="menu">
						<Menu />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Hister
				</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>

			{children}
		</Router>
	);
}