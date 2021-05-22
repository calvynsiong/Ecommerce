import React from 'react'
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles({
    productScreen: {
        
    },
    ScreenLeft: {
        
    },
    ScreenRight: {
        
    },

})


const ProductScreen = () => {
    const classes = useStyles()


    return (
        <Container className={classes.productScreen}>

            <div className={classes.ScreenLeft}></div>
            <div className={classes.ScreenRight}></div>

        </Container>
    )
}

export default ProductScreen
