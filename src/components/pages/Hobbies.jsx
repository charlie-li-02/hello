import React from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import * as Look from "./Look";

function Hobbies() {
    const classes = Look.styles();

    return (
        <div className="Hobbies">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        Hobbies is under construction
                    </Typography>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

export default Hobbies;