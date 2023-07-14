import React from 'react'
import {Link, withRouter} from "react-router-dom";
import {Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1rem",
        backgroundColor: "none",
    },
    menuItem: {
        color: "#ffffff",
        textDecoration: "none",
        cursor: "pointer",
        fontSize: "14px",
        marginLeft: "7px",
        padding: "10px",
        marginRight: "0px",
        "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "3px"
        }
    },
    button: {
        marginLeft: "auto",
        display: "flex",
        width: "150px",
        textDecoration: "none",
        fontSize: "13px",
        alignItems: "center",
        justifyContent: "center",
        height: "40px",
        boxSizing: "content-box",
        borderRadius: 0,
        background: "#efefef",
        color: "#121212",
        fill:"#ffffff",
        outline: "none",
        outlineOffset: "none",
        boxShadow: "0px 0px 0 0 #000000",
        "&:hover": {
            backgroundColor: "#121212",
            color: "#ffffff",
            outline: "none",
            outlineOffset: "none",
            fill: "#121212",
            boxShadow: "0px 0px 0 0 #000000"
        },
    },
})


function NavBarMobile() {
    const classes = styles();
    return (
        <Toolbar position="sticky" color="none" className={classes.bar}>
            <Link to="/hello" className={classes.menuItem}>HOME</Link>
            <Link to="/about" className={classes.menuItem}>ABOUT</Link>
            <Link to="/skills" className={classes.menuItem}>SKILLS</Link>
            <Link to="/projects" className={classes.menuItem}>PROJECTS</Link>
            {/*<Link to="/hobbies" className={classes.menuItem}>HOBBIES</Link>*/}
            <Link to="/contact" className={classes.button}>CONTACT ME</Link>
        </Toolbar>
    );
}

export default withRouter(NavBarMobile);