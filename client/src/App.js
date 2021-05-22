import React, { useState } from "react"
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import { makeStyles, ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';
import { lightGreen, amber } from "@material-ui/core/colors";


const useStyles = makeStyles({
  wrap: {
    minHeight: "100vh",

  }

})

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const classes = useStyles()

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: lightGreen,
      secondary: amber
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.wrap}>
        <Navbar>
          <Background></Background>
        </Navbar>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
