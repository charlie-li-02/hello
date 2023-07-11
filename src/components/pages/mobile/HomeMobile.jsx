import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import * as Look from "../LookMobile";
import Footer from "../../Footer";
import HelloButton from "../../HelloButtonMobile";
import Introduction from "../../Introduction";

const hellos = ["What's up?", "How's it going?", "Hey there.", "You look great today.", "Look around.",
    "Hope you're having a great day!", "Yo, the name's Charlie.", "Hope you're having a great day!",
    "Sup? I'm Charlie.", "Hello hello hello!"]

function HomeMobile() {
    const classes = Look.styles();
    return (
        <div className="Home">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.homeWrapper}>
                    {/*<HelloButton className={classes.homePageHeading} text={"HELLO"} onClick={hello}/>*/}
                    <Introduction/>
                </div>
                <Footer className={classes.footerAbsolute}/>
            </MuiThemeProvider>
        </div>
    );
}

function hello() {
    document.getElementById("helloText").innerHTML = hellos[Math.floor(Math.random() * 10)];
}

export default HomeMobile;