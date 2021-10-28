import React, {Component} from "react";
import './App.css';
import {createTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ActionButton from "./components/ActionButton";

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
        width: "25%",
        margin: "auto",
        textAlign: "center"
    },
    heading: {
        cursor: "pointer",
        marginTop: "15rem",
        "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "3px"
        }
    },
    subHeading:{
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
            <Typography variant="h1" className={classes.heading} color="primary" onClick={hello}>
                Hello
            </Typography>
            <Typography variant="h4" className={classes.subHeading} color="primary">
                Welcome to Charlie's website!
            </Typography>
        </div>
            <Footer/>
        </MuiThemeProvider>
    </div>
  );
}

function hello() {
    window.alert("hello");
}

export default App;
