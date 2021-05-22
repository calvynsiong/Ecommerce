import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    backdrop: {
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: '100',
        position: 'fixed',

    }

})

const Background = ({ show, setShow }) => {
    useEffect(() => {
        const handleBackdrop = () => {
            if (window.innerWidth > 600) {
                setShow(false)

            }
        }
        window.addEventListener("resize", handleBackdrop)
        return () => {
            return window.removeEventListener("resize", handleBackdrop)
        }
    })



    const classes = useStyles()

    return (
        <>{(window.innerWidth < 600) && show && <div className={classes.backdrop}> </div>}</>
    );

}

export default Background
