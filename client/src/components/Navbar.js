import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    useTheme,
    AppBar,
    Toolbar,
    Button,
    Typography,
    Hidden,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Badge,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';

import { useSelector } from 'react-redux';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        minHeight: "100vh"
    },
    appBar: {
        backgroundColor: theme.palette.primary.light,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: theme.palette.primary.light,
        width: drawerWidth,
        overflowX: 'hidden',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // align
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
    button: {
        marginRight: '1rem',
        paddingTop: '1em',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    avatar: {
        height: theme.spacing(2),
        width: theme.spacing(2),
    },
}));

const Navbar = ({ children, setShow, open, setOpen }) => {
    const classes = useStyles();
    const theme = useTheme();
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart



    const handleDrawerOpen = () => {
        if (window.innerWidth < 600) {
            setOpen(true);
            setShow(true)
        }
    };

    const handleDrawerClose = () => {
        if (window.innerWidth < 600) {
            setOpen(false);
            setShow(false)
        }
    };

    const total = cartItems.reduce((total, current) => {
        return (total += current.quantity)
    }, 0)

    return (
        <>
            <AppBar
                position='static'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <Typography variant='h6' className={classes.title}>
                        Quick Shopper
                    </Typography>
                    <Hidden xsDown>
                        <Button
                            className={classes.button}
                            href='/cart'
                            startIcon={
                                <Badge badgeContent={total} color='secondary'>
                                    <ShoppingCartIcon />
                                </Badge>
                            }>
                            Cart
                        </Button>
                        <Button
                            className={classes.button}
                            href='/'
                            startIcon={<StorefrontIcon />}>
                            Shop
                        </Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            {children}
            <Hidden smUp>
                <Drawer
                    className={classes.drawer}
                    variant='persistent'
                    anchor='right'
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? (
                                <ChevronLeftIcon />
                            ) : (
                                <ChevronRightIcon />
                            )}
                        </IconButton>
                    </div>
                    <List className={classes.content}>
                        <ListItem
                            button
                            component='a'
                            href='/cart'
                            alignItems='center'>
                            <ListItemIcon>
                                <Badge badgeContent={total} color='secondary'>
                                    <ShoppingCartIcon />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary='Cart' />
                        </ListItem>
                        <ListItem button component='a' href='/' alignItems='center'>
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary='Shop' />
                        </ListItem>
                    </List>
                </Drawer>
            </Hidden>
        </>
    );
};

export default Navbar;
