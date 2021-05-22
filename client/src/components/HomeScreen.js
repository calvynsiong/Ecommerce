import React from 'react'
import { Typography, makeStyles, Grid, Card, CardActionArea, CardContent, CardActions, CardMedia, Button, Container, useTheme, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    homescreen: {
        margin: '1em auto',
        maxWidth: '90vw',
        minHeight: '100vh',
    },
    grid: {
        display: 'flex',
        justifyContent: "center",
        width: '100%',
        // alignItems: "center",
    },
    root: {
        maxWidth: 500,
        minWidth: 350,
        margin: theme.spacing(3),
    },
    media: {
        height: 200,
    },
    title: {
        margin: '0 0 1rem 8px',
    },
    view: {
        justifyContent: 'center'
    },
    button: {
        color: theme.palette.primary.dark,
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "black",
            opacity: "0.7",
        }
    }

}))



const HomeScreen = () => {
    const classes = useStyles()
    const theme = useTheme();

    return (
        <Container className={classes.homescreen}>
            <Typography variant="h3" color="initial" className={classes.title}>Newest Products</Typography>
            <Grid container spacing={1} className={classes.grid}>
                <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
                    <Card raised>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                                title=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Product 1
                                </Typography>
                                <Typography component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia est sapiente quibusdam incidunt hic, esse itaque debitis unde amet praesentium labore libero eveniet voluptatem.
                                </Typography>
                                <Typography variant="body1" align="right" >
                                    <Box fontWeight="fontWeightBold">
                                        $ 499.99
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.view}>
                            <Button size="small" href={`/product/${1}`} variant="outlined" className={classes.button}>
                                View Product
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
                    <Card raised>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                                title=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Product 1
                                </Typography>
                                <Typography component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia est sapiente quibusdam incidunt hic, esse itaque debitis unde amet praesentium labore libero eveniet voluptatem.
                                </Typography>
                                <Typography variant="body1" align="right" >
                                    <Box fontWeight="fontWeightBold">
                                        $ 499.99
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.view}>
                            <Button size="small" href={`/product/${1}`} variant="outlined" className={classes.button}>
                                View Product
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
                    <Card raised>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                                title=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Product 1
                                </Typography>
                                <Typography component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia est sapiente quibusdam incidunt hic, esse itaque debitis unde amet praesentium labore libero eveniet voluptatem.
                                </Typography>
                                <Typography variant="body1" align="right" >
                                    <Box fontWeight="fontWeightBold">
                                        $ 499.99
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.view}>
                            <Button size="small" href={`/product/${1}`} variant="outlined" className={classes.button}>
                                View Product
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
                    <Card raised>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                                title=""
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Product 1
                                </Typography>
                                <Typography component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia est sapiente quibusdam incidunt hic, esse itaque debitis unde amet praesentium labore libero eveniet voluptatem.
                                </Typography>
                                <Typography variant="body1" align="right" >
                                    <Box fontWeight="fontWeightBold">
                                        $ 499.99
                                    </Box>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.view}>
                            <Button size="small" href={`/product/${1}`} variant="outlined" className={classes.button}>
                                View Product
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>

            </Grid>
        </Container>
    )
}

export default HomeScreen
