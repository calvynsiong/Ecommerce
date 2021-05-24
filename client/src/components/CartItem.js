import React from 'react'
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

const useStyles = makeStyles(theme => ({
    items: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        // '@media (max-width: 400px)': {
        //     flexDirection: "column"
        [theme.breakpoints.down('sm')]: {
            fontSize: 18
        }
        // }
    },
    productImage: {
        minWidth: '50px',
        width: '100%',
        display: 'flex',
        justifySelf: "center",
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            maxWidth: "50%",
            margin: "0 auto"

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
        "&>*": {
            textTransform: 'none',
            display: 'flex',
            justifySelf: 'flex-start',
        }
    },
    price: {},
    delete: {
        color: 'darkred',
        marginLeft: theme.spacing(2)
    }
}))

const CartItem = () => {
    const classes = useStyles()
    const [quantity, setQuantity] = React.useState('')

    const handleChange = event => {
        setQuantity(event.target.value)
    }

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
                        <img
                            className={classes.productImage}
                            src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                            alt='Product'
                        />
                    </Grid>
                    <Grid item xs={5} sm={2} className={classes.product}>
                        <Button
                            size='small'
                            href={`/product/`}
                            variant='text'
                        >
                            Product 1
                        </Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Typography
                            variant='body1'
                            color='initial'
                            className={classes.price}
                        >
                            $ 499.99
                        </Typography>
                    </Grid>
                    <Grid item sm={3}>
                        <FormControl className={classes.formControl}>
                            <Select
                                value={quantity}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={1}>
                        <IconButton aria-label='delete-items' className={classes.delete}>
                            <DeleteForeverIcon></DeleteForeverIcon>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default CartItem
