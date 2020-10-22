import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Heading } from '../components/Heading'

const iFrame: React.CSSProperties = {
    background: '#FFF',
    border: 'none',
    borderRadius: '2px',
    boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
    width: '100%'
}

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
                    <iframe style={iFrame} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-vasyo/embed/charts?id=1fed0367-ba1d-4863-8c1d-8d8f8a2457d6&theme=light"></iframe>
                </Grid>

                <Grid item xs={6}>
                    <iframe style={iFrame} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-vasyo/embed/charts?id=145f8aa5-15cf-42fb-b4cc-c53f70a303d8&theme=light"></iframe>
                </Grid>

                <Grid item xs={12}>
                    <iframe style={iFrame} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-vasyo/embed/charts?id=54344093-c283-4134-94d5-6698c438fbf9&theme=light"></iframe>
                </Grid>
            </Grid>
        </div>
        
    )
}