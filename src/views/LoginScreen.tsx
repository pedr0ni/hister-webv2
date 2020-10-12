import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Backdrop, CircularProgress } from '@material-ui/core';
import UserService from '../services/UserService';
import { useHistory } from 'react-router-dom';
import { TemporaryBackdrop } from '../components/TemporaryBackdrop';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Hister Administrador
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const classes = useStyles()
	const history = useHistory()

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [loading, setLoading] = React.useState(false)

	const login = async () => {
		setLoading(true)

		const response = await UserService.authenticate({
			email, password
		})

		if (response) {
			UserService.setToken(response.data.token)
			history.push('/users')
		} else {
			console.log('Ops...')
		}

		setLoading(false)
	}

	return (
		<Container component="main" maxWidth="xs">
			<TemporaryBackdrop loading={loading} />
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Entrar
        		</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="E-mail"
						name="email"
						autoComplete="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Senha"
						type="password"
						id="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Lembrar-me"
					/>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={login}
						className={classes.submit}
					>
						Entrar
          			</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Esqueceu sua senha?
              				</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								Não tem uma conta? Registrar-se
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}