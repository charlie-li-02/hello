import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import * as Look from "../LookMobile";
import Footer from "../../Footer";
import Introduction from "../../IntroductionMobile";


function HomeMobile() {
    const classes = Look.styles();
    return (
        <div className="Home">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.homeWrapper}>
                    <Introduction/>
                </div>
                <Footer className={classes.footerAbsolute}/>
            </MuiThemeProvider>
        </div>
    );
}


export default HomeMobile;