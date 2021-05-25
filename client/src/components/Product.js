import React from 'react'
import { Typography, makeStyles, Grid, Card, CardActionArea, CardContent, CardActions, CardMedia, Button, Box } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        minWidth: 350,
        margin: theme.spacing(3),
    },
    media: {
        height: 200,
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


const Product = ({ imageUrl, name, price, description, productId }) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
            <Card raised>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={imageUrl}
                        title={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography component="p">
                            {description.substring(0, 120)}...
                        </Typography>
                        <Typography variant="body1" align="right" >
                            <Box fontWeight="fontWeightBold">
                                $ {price}
                            </Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.view}>
                    <Button size="small" href={`/product/${productId}`} variant="outlined" className={classes.button}>
                        View Product
                    </Button>
                </CardActions>
            </Card>

        </Grid>
    )
}

export default Product
