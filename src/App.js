import React, {Component} from "react";
import './App.css';
import {createTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import NavBar from "./components/NavBar";
import CustomButton from "./components/CustomButton";
import Footer from "./components/Footer";

const theme = createTheme({
    palette: {
        primary: {
            main: "#131313",
        },
        secondary: {
            main: "#ffffff",
        },
        typography: {
            fontFamily: [
               'helvetica'
            ]
        }
    }
})

const styles = makeStyles({
    wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "5rem"
    },
    littleSpace:{
        marginTop: "2.5rem",
    },
    grid:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
})

function App() {
    const classes = styles();

    return (
    <div className="App">
        <MuiThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
            <Typography variant="h1" className={classes.bigSpace} color="primary">
                Hello, I'm Charlie
            </Typography>
            <Typography variant="h4" className={classes.littleSpace} color="primary">
                Welcome to my website
            </Typography>
        </div>
        <div className={classes.bigSpace}>
            <Footer/>
        </div>
        </MuiThemeProvider>
    </div>
  );
}

export default App;
