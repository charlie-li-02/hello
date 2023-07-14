import React from "react";
import * as Look from "../Look";
import Footer from "../../Footer";
import Introduction from "../../Introduction";


function HomeBrowser() {
    const classes = Look.styles();
    return (
        <div className="Home">
                <div className={classes.wrapper}>
                    <Introduction/>
                </div>
                <Footer className={classes.footerAbsolute}/>
        </div>
    );
}

export default HomeBrowser;