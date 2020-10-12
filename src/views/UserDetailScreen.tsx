import { Button, Container, Divider, TextField, Typography } from '@material-ui/core'
import { Delete, Save } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ConfirmDialog } from '../components/ConfirmDialog'
import { TemporaryBackdrop } from '../components/TemporaryBackdrop'
import { User } from '../models/User'
import UserService from '../services/UserService'

export default function UserDetailScreen() {

    const params = useParams<{
        id: string
    }>()
    const [user, setUser] = React.useState<User>()
    const [loading, setLoading] = React.useState(true)
    const [backdrop, setBackdrop] = React.useState(false)
    const [showDialog, setShowDialog] = React.useState(false)

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

    const saveData = async () => {
        setBackdrop(true)
    }

    const deleteUser = async () => {
        setBackdrop(true)

    }

    return (
        <Container>
            <ConfirmDialog onReject={() => setShowDialog(false)} onConfirm={deleteUser} show={showDialog} title={`Remover ${user?.name}`} message="Você realmente deseja deletar esse usuário? Essa operação não pode ser desfeita." />
            <TemporaryBackdrop loading={backdrop} />
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
                        <Skeleton animation='wave' variant='text' height={100} width='100%' />
                        <Skeleton animation='wave' variant='text' height={100} width='100%' />
                        <Skeleton animation='wave' variant='text' height={100} width='100%' />
                    </div>
                ) : (
                    <div>
                        <form noValidate autoComplete="off">
                            <div className="input-holder">
                                <Typography variant="subtitle1">
                                    Nome Completo:
                                </Typography>
                                <TextField value={user?.name} onChange={(event) => setUser({...user, name: event.target.value})} className="md-textfield" id="outlined-basic" label="Nome Completo" variant="outlined" />
                            </div>

                            <div className="input-holder">
                                <Typography variant="subtitle1">
                                    E-mail
                                </Typography>
                                <TextField value={user?.email} onChange={(event) => setUser({...user, email: event.target.value})} className="md-textfield" id="outlined-basic" label="Nome Completo" variant="outlined" />
                            </div>

                            <div className="input-holder">
                                <Typography variant="subtitle1">
                                    Data de Nascimento
                                </Typography>
                                <TextField value={user?.birth} onChange={(event) => setUser({...user, birth: event.target.value})} className="md-textfield" id="outlined-basic" label="Nome Completo" variant="outlined" />
                            </div>
                        </form>

                        <div className="form-footer">
                        <Button onClick={saveData} color="primary" variant="contained" startIcon={<Save />}>
                            Salvar
                        </Button>

                        <Button onClick={() => setShowDialog(true)} color="secondary" variant="contained" startIcon={<Delete />}>
                            Deletar
                        </Button>
                        </div>
                    </div>
                )
            }

        </Container>
    )
}