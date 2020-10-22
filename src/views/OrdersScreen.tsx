import { Box, Button, Chip, Collapse, Container, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import { Book, Delete, KeyboardArrowDown, KeyboardArrowUp, LocalShipping } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import { Heading } from '../components/Heading'
import { TemporaryBackdrop } from '../components/TemporaryBackdrop'
import { IOrderProps, Order } from '../models/Order'
import OrderService from '../services/OrderService'
import { useListingStyles } from '../styles/ListingStyles'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function Row(props: { row: Order, onUpdate: (order: Order, status: IOrderProps.Status) => void }) {
    const { row, onUpdate } = props;
    const classes = useRowStyles();

    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row._id}
                </TableCell>
                <TableCell>{row.user.name}</TableCell>
                <TableCell>R$ {row.totalPrice}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell><Chip color={row.status == "CANCELLED" ? "secondary" : "primary"} label={row.status} /></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Livros
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#ID</TableCell>
                                        <TableCell>Titulo</TableCell>
                                        <TableCell>Valor</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.books?.map(bookRow => (
                                        <TableRow key={bookRow._id}>
                                            <TableCell component="th" scope="row">
                                                {bookRow._id}
                                            </TableCell>
                                            <TableCell>{bookRow.title}</TableCell>
                                            <TableCell>R$ {bookRow.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            {
                                row.status == "PENDING" ? (
                                    <div>
                                        <Button
                                            style={{marginTop: 10, marginRight: 10}}
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => onUpdate(row, "CANCELLED")}
                                            startIcon={<Delete />}
                                        >
                                            Cancelar
                                        </Button>

                                        <Button
                                            style={{marginTop: 10}}
                                            variant="contained"
                                            color="primary"
                                            onClick={() => onUpdate(row, "COMPLETED")}
                                            startIcon={<LocalShipping />}
                                        >
                                            Finalizar
                                        </Button>
                                    </div>
                                ) : (<></>)
                            }
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export const OrdersScreen: React.FC = () => {
    const classes = useListingStyles()

    const [orders, setOrders] = React.useState<Array<Order>>([])
    const [loading, setLoading] = React.useState(true)
    const [backdrop, setBackdrop] = React.useState(false)

    React.useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const response = await OrderService.listAll()

        if (response)
            setOrders(response.data)

        setLoading(false)
    }

    const updateOrder = async (order: Order, status: IOrderProps.Status) => {
        setBackdrop(true)

        order.status = status

        const response = await OrderService.update(order)

        if (response) {
            console.log("OK")
        }

        setBackdrop(false)
    }

    return (
        <Container>
            <TemporaryBackdrop loading={backdrop} />
            <Heading title="Lista de Pedidos" description="Aqui você tem informações sobre todos os pedidos do aplicativo." />

            {
                loading ? (
                    <Skeleton className={classes.tableContainer} animation="wave" variant="rect" width="100%" height={400} />
                ) : (
                        <TableContainer className={classes.tableContainer} component={Paper}>
                            <Table className={classes.table} aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell>#ID</TableCell>
                                        <TableCell>Usuário</TableCell>
                                        <TableCell>Valor total</TableCell>
                                        <TableCell>Data</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        orders.map(row => {
                                            return (
                                                <Row key={row._id} row={row} onUpdate={(row, status) => updateOrder(row, status)} ></Row>
                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
            }
        </Container>
    )
}