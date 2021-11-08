import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import * as Look from "./Look";
import Footer from "../Footer";


function Home() {
    const classes = Look.styles();

    return (
        <div className="Home">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.homePageHeading} color="primary" onClick={hello}>
                        Hello
                    </Typography>
                    <Typography variant="h5" className={classes.homePageSubHeading} color="primary">
                        My name is Charlie, nice to meet you :D
                    </Typography>
                </div>
                <Footer className={classes.footerAbsolute}/>
            </MuiThemeProvider>
        </div>
    );
}

function hello() {
    window.alert("hello");
}

export default Home;