import { Container, makeStyles, Table, TableBody, Paper, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, Button } from '@material-ui/core'
import { Delete } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { User } from '../models/User';
import UserService from '../services/UserService';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        marginTop: 20
    },
    button: {
        marginTop: 10,
        marginBottom: 20
    }
});

export default function UsersScreen() {
    const classes = useStyles();
    const history = useHistory()

    const [users, setUsers] = React.useState<Array<User>>([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => { 
        loadData()
    }, [])

    const loadData = async () => {
        const response = await UserService.listAll()

        if (response) {
            setUsers(response.data)
        }

        setLoading(false)
    }

    return (
        <Container>
            <Typography variant="h6" className='md-title'>
                Lista de Usuários
            </Typography>
            <Typography className='md-subtitle' variant="subtitle1">
                Aqui você tem informações sobre todos os usuários do aplicativo.
            </Typography>

            <Button className={classes.button} variant="contained" color="primary">
                Criar usuário
            </Button>

            <Divider />

            {
                loading ? (
                    <Skeleton className={classes.tableContainer} animation="wave" variant="rect" width="100%" height={400} />
                ) : (
                    <TableContainer className={classes.tableContainer} component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#ID</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Data de Nascimento</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((row) => (
                                    <TableRow key={row.name} onClick={() => history.push(`/users/detail/${row._id}`)}>
                                        <TableCell component="th" scope="row">
                                            {row._id}
                                        </TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell>{row.birth}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
        </Container>
    )
}