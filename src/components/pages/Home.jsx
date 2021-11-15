import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import * as Look from "./Look";
import Footer from "../Footer";

const hellos = ["What's up?", "How's it going?", "Hey there.", "You look great today.", "Look around.",
                "Hope you're having a great day!", "Yo, the name's Charlie.", "Hope you're having a great day!",
                "Sup? I'm Charlie.", "Hello hello hello!"]

function Home() {
    const classes = Look.styles();
    return (
        <div className="Home">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.homePageHeading} color="primary" onClick={hello}>
                        Hello
                    </Typography>
                    <Typography variant="h5" id="helloText" className={classes.homePageSubHeading} color="primary">
                        My name is Charlie, nice to meet you :D
                    </Typography>
                </div>
                <Footer className={classes.footerAbsolute}/>
            </MuiThemeProvider>
        </div>
    );
}

function hello() {
    document.getElementById("helloText").innerHTML = hellos[Math.floor(Math.random() * 10)];
}

export default Home;