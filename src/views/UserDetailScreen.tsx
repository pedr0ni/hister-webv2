import { Button, Container, Divider, TextField, Typography } from '@material-ui/core'
import { Delete, Save } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../models/User'
import UserService from '../services/UserService'

export default function UserDetailScreen() {

    const params = useParams<{
        id: string
    }>()
    const [user, setUser] = React.useState<User>()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const response = await UserService.infoById(params.id)

        if (response) {
            setUser(response.data)
        }

        setLoading(false)
    }

    return (
        <Container>
            {
                loading ? (
                    <Skeleton animation='wave' variant='text' height={80} width={280} />
                ) : (
                    <Typography variant="h6" className='md-title'>
                        {user?.name}
                    </Typography>
                )
            }

            <Typography className='md-subtitle' variant="subtitle1">
                {params.id}
            </Typography>

            <Divider />

            {
                loading ? (
                    <div>
                        <Skeleton animation='wave' variant='text' height={120} width='100%' />
                        <Skeleton animation='wave' variant='text' height={120} width='100%' />
                        <Skeleton animation='wave' variant='text' height={120} width='100%' />
                        <Skeleton animation='wave' variant='text' height={120} width='100%' />
                        <Skeleton animation='wave' variant='text' height={120} width='100%' />
                    </div>
                ) : (
                    <div>
                        <form noValidate autoComplete="off">
                            <div className="input-holder">
                                <Typography variant="subtitle1">
                                    Nome Completo:
                                </Typography>
                                <TextField className="md-textfield" id="outlined-basic" label="Nome Completo" variant="outlined" />
                            </div>

                            <div className="input-holder">
                                <Typography variant="subtitle1">
                                    Nome Completo:
                                </Typography>
                                <TextField className="md-textfield" id="outlined-basic" label="Nome Completo" variant="outlined" />
                            </div>

                            <div className="input-holder">
                                <Typography variant="subtitle1">
                                    Nome Completo:
                                </Typography>
                                <TextField className="md-textfield" id="outlined-basic" label="Nome Completo" variant="outlined" />
                            </div>

                            <div className="input-holder">
                                <Typography variant="subtitle1">
                                    Nome Completo:
                                </Typography>
                                <TextField className="md-textfield" id="outlined-basic" label="Nome Completo" variant="outlined" />
                            </div>
                        </form>

                        <div className="form-footer">
                        <Button color="primary" variant="contained" startIcon={<Save />}>
                            Salvar
                        </Button>

                        <Button color="secondary" variant="contained" startIcon={<Delete />}>
                            Deletar
                        </Button>
                        </div>
                    </div>
                )
            }

        </Container>
    )
}