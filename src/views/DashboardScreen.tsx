import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Heading } from '../components/Heading'

export const DashboardScreen : React.FC = () => {
    return (
        <div>
            <Heading title="Hister" description="O hister é uma plataforma gratuita para consumo de livros online.
                Uma coleção diversa com mais de 11 mil livros à sua disposição!" />

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                5327
                            </Typography>
                            <Typography color="textSecondary">
                                Usuários
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Detalhes</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                5327
                            </Typography>
                            <Typography color="textSecondary">
                                Livros
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Detalhes</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                5327
                            </Typography>
                            <Typography color="textSecondary">
                                Pedidos
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Detalhes</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    Ultimos pedidos
                </Grid>

                <Grid item xs={6}>
                    Usuarios Registrados
                </Grid>

                <Grid item xs={12}>
                    Grafico de pedidos
                </Grid>
            </Grid>
        </div>
        
    )
}