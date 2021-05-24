import React from 'react'
import { Container, Typography, makeStyles, Grid, Button, Paper } from '@material-ui/core'
import CartItem from './CartItem'

const useStyles = makeStyles((theme) => ({
    wrap: {
        marginTop: theme.spacing(4)
    },
    info: {
        padding: theme.spacing(2),
        "&>*": {
            marginBottom: theme.spacing(2)
        }
    },
    checkout: {
        margin: "3em auto",
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


const CartScreen = () => {
    const classes = useStyles()
    return (
        <Container>
            <Grid container spacing={2} className={classes.wrap}  >
                <Grid item xs={12} md={9}>
                    <Typography variant="h3" color="initial"> Shopping Cart </Typography>
                    <CartItem></CartItem>
                </Grid>
                <Grid item xs={5} md={3} className={classes.checkout}  >
                    <Paper className={classes.info}>
                        <Typography variant="h6" color="initial"> Checkout </Typography>
                        <Typography variant="body1" color="initial"> Do you want to checkout with 0 items? </Typography>
                        <Typography variant="body1" color="initial"> Total: $ 499.99 </Typography>
                        <Button variant="outlined" color="default" className={classes.button}>
                            Proceed to checkout
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CartScreen
