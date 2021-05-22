import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, AppBar, Toolbar, Button, Typography, Hidden, Drawer ,List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 220

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.primary.light,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
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
        width: drawerWidth,
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
        padding: theme.spacing(3),
        display: "flex",
        flexDirection: 'column',
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
}));


const Navbar = ({children}) => {

    const classes = useStyles();
    const theme = useTheme() 

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static" className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
                <Toolbar >
                    <Typography variant="h6" className={classes.title}>
                        Quick Shopper
                    </Typography>
                    <Hidden xsDown>
                        <Button>Cart</Button>
                        <Button>Shop</Button>
                    </Hidden>
                    <Hidden smUp>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}
                            className={clsx(open && classes.hide)} >
                                <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Toolbar>
            </AppBar>
            {children}
            <Hidden smUp>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <List className={ classes.content}>
                
                            <ListItem button >
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Cart"/>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon></ListItemIcon>
                                <ListItemText primary="Shop"/>
                            </ListItem>
                
                    </List>
                
                </Drawer>
            </Hidden>
        </div>
    )
}

export default Navbar
