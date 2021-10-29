import React from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import Footer from "../Footer";
import * as Look from "./Look";


function About() {
    const classes = Look.styles();

    return (
        <div className="About">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        about is under construction
                    </Typography>
                </div>
                <Footer/>
            </MuiThemeProvider>
        </div>
    );
}

export default About;