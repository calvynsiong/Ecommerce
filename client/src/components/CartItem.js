import React, { useState } from 'react'
import {
    Container,
    Grid,
    makeStyles,
    Button,
    Typography,
    FormControl,
    FormHelperText,
    Select,
    MenuItem,
    IconButton,
    Paper
} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { Link } from 'react-router-dom'
import Product from './Product'

const CartItem = ({
    item: { imageUrl, price, name, quantity, product, countInStock },
    quantityChangeHandler,
    removeFromCartHandler
}) => {
    const classes = useStyles()
    // const [quantity, setQuantity] = useState('')

    // const handleChange = event => {
    //     setQuantity(event.target.value)
    // }

    return (
        <Container style={{ width: '100%' }}>
            <Paper>
                <Grid
                    container
                    spacing={1}
                    alignItems='center'
                    justifyContent='center'
                    className={classes.items}
                >
                    <Grid item xs={11} sm={3}>
                        <img className={classes.productImage} src={imageUrl} alt={name} />
                    </Grid>
                    <Grid item xs={5} sm={2} className={classes.product}>
                        <Button size='small' href={`/product/${product}`} variant='text'>
                            {name}
                        </Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography
                            variant='body1'
                            color='initial'
                            className={classes.price}
                        >
                            {`$ ${price * quantity}`}
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={quantity}
                                displayEmpty
                                onChange={e => quantityChangeHandler(product, e.target.value)}
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {[...Array(countInStock).keys()].map(x => {
                                    return <MenuItem value={x + 1}>{x + 1}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={1}>
                        <IconButton aria-label='delete-items' className={classes.delete}>
                            <DeleteForeverIcon
                                onClick={() => removeFromCartHandler(product)}
                            ></DeleteForeverIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default CartItem

const useStyles = makeStyles(theme => ({
    items: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            fontSize: 18
        }
        // }
    },
    productImage: {
        minWidth: '50px',
        width: '100%',
        display: 'flex',
        justifySelf: 'center',
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            maxWidth: '50%',
            margin: '0 auto'
        }
    },
    formControl: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(2),
        margin: theme.spacing(1),
        // minWidth: 120,
        width: '100%',
        height: '.5em'
    },
    selectEmpty: {
        height: '1.5em',
        marginTop: theme.spacing(2)
    },
    product: {
        '&>*': {
            textTransform: 'none',
            display: 'flex',
            justifySelf: 'flex-start'
        }
    },
    price: {},
    delete: {
        color: 'darkred',
        marginLeft: theme.spacing(2)
    }
}))
