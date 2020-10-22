import { Button, Container, Divider, TextField, Typography } from '@material-ui/core'
import { Done } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { TemporaryBackdrop } from '../components/TemporaryBackdrop'
import { Book } from '../models/Book'
import BookService from '../services/BookService'

export default function BookCreateScreen() {

    const history = useHistory()

    const [book, setBook] = React.useState<Book>()
    const [backdrop, setBackdrop] = React.useState(false)

    const createBook = async () => {
        setBackdrop(true)
        const response = await BookService.create(book!)

        if (response) {
            history.push('/books')
        }
        
        setBackdrop(false)
    }

    return (
        <Container>
            <TemporaryBackdrop loading={backdrop} />
            <Typography variant="h6" className='md-title'>
                Novo Livro
            </Typography>
            <Typography className='md-subtitle' variant="subtitle1">
                Cadastre um novo livro para o aplicativo
            </Typography>

            <Divider />
            <div>
                <form noValidate autoComplete="off">
                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            Titulo
                        </Typography>
                        <TextField value={book?.title} onChange={(event) => setBook({...book, title: event.target.value})} className="md-textfield" id="outlined-basic" label="Harry Potter" variant="outlined" />
                    </div>

                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            Autores
                        </Typography>
                        <TextField value={book?.authors} onChange={(event) => setBook({...book, authors: event.target.value})} className="md-textfield" id="outlined-basic" label="J.K Rowling" variant="outlined" />
                    </div>

                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            Editora
                        </Typography>
                        <TextField value={book?.publisher} onChange={(event) => setBook({...book, publisher: event.target.value})} className="md-textfield" id="outlined-basic" label="Editora Abril" variant="outlined" />
                    </div>

                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            Data de Publicação
                        </Typography>
                        <TextField value={book?.publication_date} onChange={(event) => setBook({...book, publication_date: event.target.value})} className="md-textfield" id="outlined-basic" label="26/06/1997" variant="outlined" />
                    </div>

                    
                </form>

                <div className="form-footer">
                    <Button onClick={createBook} color="primary" variant="contained" startIcon={<Done />}>
                        Cadastrar
                    </Button>
                </div>
            </div>
              

        </Container>
    )
}