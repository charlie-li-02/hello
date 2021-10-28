import React from 'react'
import ActionButton from "./ActionButton";
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {MuiThemeProvider, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1rem",
        backgroundColor: "#ffffff",
    },
    menuItem: {
        cursor: "pointer",
        fontSize: "20px",
        marginLeft: "10px",
        padding: "20px",
        marginRight: "0px",
        "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "3px"
        }
    },
    button: {
        cursor: "pointer",
        left: "200px",
        marginRight: "300px"
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0)" className={classes.bar}>
            <Typography variant="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Skills
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Projects
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Hobbies
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact me
            </Typography>
        </Toolbar>
    )
}

export default NavBar