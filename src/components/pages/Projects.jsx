import React from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import * as Look from "./Look";

function Projects() {
    const classes = Look.styles();

    return (
        <div className="Projects">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        project is under construction
                    </Typography>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Projects;