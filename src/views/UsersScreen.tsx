import { Container, makeStyles, Table, TableBody, Paper, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, Button } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab';
import React from 'react'


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

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function UsersScreen() {

    const [loading, setLoading] = React.useState(true)

    const classes = useStyles();

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
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
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