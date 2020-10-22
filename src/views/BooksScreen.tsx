import { Container, Table, TableBody, Paper, TableCell, TableContainer, TableHead, TableRow, Typography, Divider, Button, IconButton } from '@material-ui/core'
import { Create, Delete } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { Heading } from '../components/Heading';
import { Book } from '../models/Book';
import { User } from '../models/User';
import BookService from '../services/BookService';
import { useListingStyles } from '../styles/ListingStyles';

export default function BooksScreen() {
    const classes = useListingStyles()
    const history = useHistory()

    const [books, setBooks] = React.useState<Array<Book>>([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => { 
        loadData()
    }, [])

    const loadData = async () => {
        const response = await BookService.listAll()

        if (response) {
            setBooks(response.data.books)
        }

        setLoading(false)
    }

    return (
        <Container>

            <Heading title="Lista de Livros" description="Aqui você tem informações sobre todos os livros do aplicativo.">
                <Button onClick={() => history.push('/books/create')} className={classes.button} variant="contained" color="primary">
                    Criar livro
                </Button>
            </Heading>

            {
                loading ? (
                    <Skeleton className={classes.tableContainer} animation="wave" variant="rect" width="100%" height={400} />
                ) : (
                    <TableContainer className={classes.tableContainer} component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#ID</TableCell>
                                    <TableCell>Titulo</TableCell>
                                    <TableCell>Autores</TableCell>
                                    <TableCell>Avaliação</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {books.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell component="th" scope="row">
                                            {row._id}
                                        </TableCell>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.authors}</TableCell>
                                        <TableCell>{row.average_rating}</TableCell>
                                        <TableCell><IconButton onClick={() => history.push(`/books/detail/${row._id}`)}><Create /></IconButton></TableCell>
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