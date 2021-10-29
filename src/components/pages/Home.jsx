import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import * as Look from "./Look";


function Home() {
    const classes = Look.styles();

    return (
        <div className="Home">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary" onClick={hello}>
                        Hello
                    </Typography>
                    <Typography variant="h5" className={classes.subHeading} color="primary">
                        Welcome to Charlie's website!
                    </Typography>
                </div>
            </MuiThemeProvider>
        </div>
    );
}

function hello() {
    window.alert("hello");
}

export default Home;