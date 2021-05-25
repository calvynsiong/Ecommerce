import React, { useEffect } from 'react'
import {
    Typography,
    makeStyles,
    Grid,
    Container,
    CircularProgress
} from '@material-ui/core'

// !  useSelector gets a function from the redux store state and useDispatch is used to create dispatch
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product'
// ! Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

const HomeScreen = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const { products, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <Container className={classes.homescreen}>
            <Typography variant='h3' color='initial' className={classes.title}>
                Newest Products
            </Typography>
            {loading ? (
                <CircularProgress size={50}></CircularProgress>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <Grid container spacing={1} className={classes.grid}>
                    {products.map(({ imageUrl, name, price, description, _id }) => (
                        <Product
                            key={_id}
                            productId={_id}
                            imageUrl={imageUrl}
                            name={name}
                            price={price}
                            description={description}
                        />
                    ))}
                </Grid>
            )}
        </Container>
    )
}

export default HomeScreen
const useStyles = makeStyles(theme => ({
    homescreen: {
        margin: '1em auto',
        maxWidth: '90vw',
        minHeight: '100vh'
    },
    title: {
        margin: '1rem 8px'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
        // alignItems: "center",
    }
}))
