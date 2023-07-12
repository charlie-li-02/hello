import React from "react";
import * as Look from "../LookMobile";
import Footer from "../../Footer";
import Introduction from "../../IntroductionMobile";

function HomeMobile() {
    const classes = Look.styles();
    return (
        <div className="Home">
                <div className={classes.homeWrapper}>
                    <Introduction/>
                </div>
                <Footer className={classes.footerAbsolute}/>
        </div>
    );
}


export default HomeMobile;