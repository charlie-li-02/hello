import React from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import * as Look from "./Look";

function Skills() {
    const classes = Look.styles();

    return (
        <div className="Skills">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        skills is under construction
                    </Typography>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Skills;