import React from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import * as Look from "./Look";


function Contact() {
    const classes = Look.styles();

    return (
        <div className="Contact Me">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        find me
                    </Typography>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Contact;