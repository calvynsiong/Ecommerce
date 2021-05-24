import React, { useState } from "react"
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import ProductScreen from "./components/ProductScreen";
import HomeScreen from "./components/HomeScreen";
import CartScreen from "./components/CartScreen";
import { makeStyles, ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';
import { lightGreen, amber } from "@material-ui/core/colors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const useStyles = makeStyles({
  wrap: {
    minHeight: "100vh",
    // height: "100%",
  }

})

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false);




  const classes = useStyles()

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: lightGreen,
      secondary: amber
    }
  })


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper className={classes.wrap} variant="outlined">
          <Background show={show} setShow={setShow}></Background>
          <Navbar setShow={setShow} open={open} setOpen={setOpen}>
            <Switch>
              <Route exact path="/" component={HomeScreen}></Route>
              <Route exact path="/product/:id" component={ProductScreen}></Route>
              <Route exact path="/cart" component={CartScreen}></Route>
            </Switch>
          </Navbar>
        </Paper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
