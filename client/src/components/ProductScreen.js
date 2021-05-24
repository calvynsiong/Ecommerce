import React from 'react'
import { makeStyles, Container, Typography, FormControl, Divider, FormHelperText, Select, MenuItem, Button } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    productScreen: {
        maxWidth: '1400px',
        margin: "1em auto",
        display: 'flex',
        justifyContent: 'center',
    },
    ScreenLeft: {
        display: 'flex',
        padding: '1em',
        marginleft: '2em',
        alignItems: "center",
    },
    leftImage: {
        width: '100%',
        height: '100%',
        minWidth: '200px',
        minHeight: '200px',
        margin: '1em',
        paddingRight: '1em',
    },
    leftInfo: {
        margin: '1em',
        marginLeft: '2em',
        background: 'offwhite',
        fontSize: '0.9rem',
        '& > p': {
            padding: '1rem',
            fontSize: "1.5em",
        }

    },
    leftName: {
        fontWeight: 'bold',
        fontSize: '2.5rem',
    },
    ScreenRight: {
        display: 'flex',
        justifyContent: 'center',

    },
    rightInfo: {
        width: "50%",
        display: 'flex',
        flexDirection: "column",
        margin: '1em',
        background: '#fff',
        padding: '2em',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',

        '& > h6 ': {
            padding: '.75em',
            display: 'grid',
            marginBottom: '.75em',
            gridTemplateColumns: 'repeat(2, 1fr)',
        }

    },


    formControl: {
        marginTop: theme.spacing(-2),
        marginBottom: theme.spacing(2),
        margin: theme.spacing(1),
        height: ".5em",
    },
    selectEmpty: {
        height: "1.5em",
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
        textTransform: 'none',
        justifySelf: "flex-end",
        color: theme.palette.primary.dark,
        backgroundColor: "black",
        '&:hover': {
            backgroundColor: "black",
            opacity: "0.7",
        }
    }

}))


const ProductScreen = () => {
    const classes = useStyles()
    const [quantity, setQuantity] = React.useState('');

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <>
            <Container className={classes.productScreen}>
                <div className={classes.ScreenLeft}>
                    <div className={classes.leftInfo}>
                        <Typography variant="h6" color="initial" className={classes.leftName}>Playstation 5</Typography>
                        <Typography variant="body" color="initial">Price: {`$ ${499.99}`}</Typography>
                        <Divider></Divider>
                        <Typography variant="body1" color="initial">Description: {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum ab sed laboriosam facilis! Aspernatur magni consequatur aperiam at placeat quas obcaecati enim quo dolore.`}</Typography>
                    </div>
                    <div >
                        <img className={classes.leftImage} src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Product1" />
                    </div>
                </div>
            </Container>
            <div className={classes.ScreenRight}>
                <div className={classes.rightInfo}>
                    <Typography variant="h6" color="initial">Price: <span > {`$ ${499.99}`}</span></Typography>
                    <Divider></Divider>
                    <Typography variant="h6" color="initial">Status: <span >In Stock</span> </Typography>
                    <Divider></Divider>
                    <Typography variant="h6" color="initial" >Quantity:
                        <span >
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
                                <FormHelperText>Select an amount</FormHelperText>
                            </FormControl>
                        </span>
                    </Typography>
                    <Divider></Divider>
                    <Button
                        className={classes.button}
                        variant="contained"
                        href='/'
                        startIcon={<AddShoppingCartIcon />}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </>

    )
}

export default ProductScreen
