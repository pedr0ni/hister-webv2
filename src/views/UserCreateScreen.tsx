import { Button, Container, Divider, TextField, Typography } from '@material-ui/core'
import { Done } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { TemporaryBackdrop } from '../components/TemporaryBackdrop'
import { User } from '../models/User'
import UserService from '../services/UserService'

export default function UserCreateScreen() {

    const history = useHistory()

    const [user, setUser] = React.useState<User>()
    const [backdrop, setBackdrop] = React.useState(false)

    const createUser = async () => {
        setBackdrop(true)
        const response = await UserService.create(user!)

        if (response) {
            history.push('/users')
        }
        
        setBackdrop(false)
    }

    return (
        <Container>
            <TemporaryBackdrop loading={backdrop} />
            <Typography variant="h6" className='md-title'>
                Novo Usuário
            </Typography>
            <Typography className='md-subtitle' variant="subtitle1">
                Cadastre um novo usuário do aplicativo/administrador
            </Typography>

            <Divider />
            <div>
                <form noValidate autoComplete="off">
                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            Nome Completo:
                        </Typography>
                        <TextField value={user?.name} onChange={(event) => setUser({...user, name: event.target.value})} className="md-textfield" id="outlined-basic" label="John Doe" variant="outlined" />
                    </div>

                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            E-mail
                        </Typography>
                        <TextField value={user?.email} onChange={(event) => setUser({...user, email: event.target.value})} className="md-textfield" id="outlined-basic" label="john.doe@example.com" variant="outlined" />
                    </div>

                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            Senha
                        </Typography>
                        <TextField type="password" value={user?.password} onChange={(event) => setUser({...user, password: event.target.value})} className="md-textfield" id="outlined-basic" label="Senha" variant="outlined" />
                    </div>

                    <div className="input-holder">
                        <Typography variant="subtitle1">
                            Data de Nascimento
                        </Typography>
                        <TextField value={user?.birth} onChange={(event) => setUser({...user, birth: event.target.value})} className="md-textfield" id="outlined-basic" label="18/11/1999" variant="outlined" />
                    </div>
                </form>

                <div className="form-footer">
                <Button onClick={createUser} color="primary" variant="contained" startIcon={<Done />}>
                    Cadastrar
                </Button>

                </div>
            </div>
              

        </Container>
    )
}