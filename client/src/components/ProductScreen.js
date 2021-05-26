import React, { useState, useEffect } from 'react'
import {
    makeStyles,
    Container,
    Typography,
    FormControl,
    Divider,
    FormHelperText,
    Select,
    MenuItem,
    Button,
    CircularProgress
} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useDispatch, useSelector } from 'react-redux'

// ! Actions
import { getProductsDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
import { getProducts as listProducts } from '../redux/actions/productActions'

const ProductScreen = ({ match, history }) => {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const productsDetails = useSelector(state => state.getProductsDetails)
    const getProducts = useSelector(state => state.getProducts)
    const { products: products1, loading: loading1, error: error1 } = getProducts

    const { loading, error, products } = productsDetails

    useEffect(() => {
        dispatch(listProducts())
        if (products && match.params.id !== products._id) {
            dispatch(getProductsDetails(match.params.id))
        }
    }, [])

    const handleChange = event => {
        setQuantity(event.target.value)
    }

    const addToCartHandler = () => {
        dispatch(addToCart(products._id, quantity))
        history.push('/cart')
    }

    return (
        <>
            {loading ? (
                <CircularProgress> </CircularProgress>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <Container className={classes.productScreen}>
                        <div className={classes.ScreenLeft}>
                            <div className={classes.leftInfo}>
                                <Typography
                                    variant='h6'
                                    color='initial'
                                    className={classes.leftName}
                                >
                                    {products.name}
                                </Typography>
                                <Typography variant='body2' color='initial'>
                                    Price: {`$ ${products.price}`}
                                </Typography>
                                <Divider></Divider>
                                <Typography variant='body1' color='initial'>
                                    {`Description: ${products.description}`}
                                </Typography>
                            </div>
                            <div>
                                <img
                                    className={classes.leftImage}
                                    src={products.imageUrl}
                                    alt={products.name}
                                />
                            </div>
                        </div>
                    </Container>
                    <div className={classes.ScreenRight}>
                        <div className={classes.rightInfo}>
                            <Typography variant='h6' color='initial'>
                                Price: <span> {`$ ${products.price}`}</span>
                            </Typography>
                            <Divider></Divider>
                            <Typography variant='h6' color='initial'>
                                Status:{' '}
                                <span>
                                    {products.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </Typography>
                            <Divider></Divider>
                            <Typography variant='h6' color='initial'>
                                Quantity:
                                <span>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            value={quantity}
                                            onChange={handleChange}
                                            displayEmpty
                                            className={classes.selectEmpty}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            {[...Array(products.countInStock).keys()].map(x => (
                                                <MenuItem key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText >Select amount</FormHelperText>
                                    </FormControl>
                                </span>
                            </Typography>
                            <Divider></Divider>
                            <Button
                                className={classes.button}
                                variant='contained'
                                startIcon={<AddShoppingCartIcon />}
                                onClick={addToCartHandler}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ProductScreen
const useStyles = makeStyles(theme => ({
    productScreen: {
        maxWidth: '1400px',
        margin: '1em auto',
        display: 'flex',
        justifyContent: 'center',
    },
    ScreenLeft: {
        display: 'flex',
        padding: '1em',
        marginleft: '2em',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            "&>div>img ": {
                width: "50%",
                height: "50%",
            }
        }
    },
    leftImage: {
        width: '100%',
        height: '100%',
        minWidth: '200px',
        minHeight: '200px',
        display: 'flex',
        justifyContent: 'center',
        margin: '1em auto',
        paddingRight: '1em'
    },
    leftInfo: {
        margin: '1em',
        marginLeft: '2em',
        background: 'offwhite',
        fontSize: '0.9rem',
        '& > p': {
            padding: '1rem',
            fontSize: '1.5em'
        }
    },
    leftName: {
        fontWeight: 'bold',
        fontSize: '2.5rem'
    },
    ScreenRight: {
        display: 'flex',
        justifyContent: 'center'
    },
    rightInfo: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1em',
        background: '#fff',
        padding: '2em',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',

        '& > h6 ': {
            padding: '.75em',
            display: 'grid',
            marginBottom: '.75em',
            gridTemplateColumns: 'repeat(2, 1fr)'
        }
    },
    formControl: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(6),
        margin: theme.spacing(1),
        height: '.5em'
    },
    selectEmpty: {
        height: '1.5em',
        marginTop: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(2),
        textTransform: 'none',
        justifySelf: 'flex-end',
        color: theme.palette.primary.dark,
        backgroundColor: 'black',
        '&:hover': {
            backgroundColor: 'black',
            opacity: '0.7'
        }
    }
}))
