import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import * as Look from "../Look";
import Footer from "../../Footer";
import Introduction from "../../Introduction";

function HomeBrowser() {
    const classes = Look.styles();
    return (
        <div className="Home">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Introduction/>
                </div>
                <Footer className={classes.footerAbsolute}/>
            </MuiThemeProvider>
        </div>
    );
}

export default HomeBrowser;