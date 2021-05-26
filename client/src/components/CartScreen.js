import React from 'react'
import {
    Container,
    Typography,
    makeStyles,
    Grid,
    Button,
    Paper
} from '@material-ui/core'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

const useStyles = makeStyles(theme => ({
    wrap: {
        marginTop: theme.spacing(4)
    },
    info: {
        padding: theme.spacing(2),
        '&>*': {
            marginBottom: theme.spacing(2)
        }
    },
    checkout: {
        margin: '3em auto',
        minWidth: "80%",
    },
    button: {
        color: theme.palette.primary.dark,
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'black',
            opacity: '0.7'
        }
    },
    empty: {
        margin: "2em",
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"

    }
}))

const CartScreen = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const quantityChangeHandler = (id, quantity) => {
        dispatch(addToCart(id, quantity))
    }
    const removeFromCartHandler = id => {
        dispatch(removeFromCart(id))
    }

    return (
        <Container>
            <Grid container spacing={2} className={classes.wrap}>
                <Grid item xs={12} md={9}>
                    <Typography variant='h3' color='initial'>
                        {' '}
                        Shopping Cart{' '}
                    </Typography>

                    {cartItems.length === 0 ? (
                        < div className={classes.empty}>
                            <Typography variant='h4' color='initial' align="center" gutterBottom >
                                {' '}
                                Your cart is empty
                            </Typography>
                            <Link to={`/`}  >Go back to the products page</Link>
                        </ div>
                    ) : (
                        cartItems.map(item => {
                            return (
                                <CartItem
                                    item={item}
                                    quantityChangeHandler={quantityChangeHandler}
                                    removeFromCartHandler={removeFromCartHandler}
                                ></CartItem>
                            )
                        })
                    )}
                </Grid>

                <Grid item xs={5} md={3} className={classes.checkout}>
                    <Paper className={classes.info}>
                        <Typography variant='h6' color='initial'>
                            Checkout
                        </Typography>
                        <Typography variant='body1' color='initial'>

                            {`Do you want to checkout with  ${cartItems.reduce((total, current) => {
                                return (total += current.quantity)
                            }, 0)} items`}
                        </Typography>
                        <Typography variant='body1' color='initial'>
                            {`Total: $ ${cartItems.reduce((total, current) => {
                                return (total += current.price * current.quantity)
                            }, 0).toFixed(2)}`}
                        </Typography>
                        <Button
                            variant='outlined'
                            color='default'
                            className={classes.button}
                        >
                            Proceed to checkout
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CartScreen
