import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {BrowserView, MobileView} from 'react-device-detect';
import * as Look from "./Look";
import HomeRich from "./richclient/HomeRich";
import HomeMobile from "./mobile/HomeMobile";
import Footer from "../Footer";
import HelloButton from "../HelloButton";

const hellos = ["What's up?", "How's it going?", "Hey there.", "You look great today.", "Look around.",
                "Hope you're having a great day!", "Yo, the name's Charlie.", "Hope you're having a great day!",
                "Sup? I'm Charlie.", "Hello hello hello!"]

function Home() {
    const classes = Look.styles();
    return (
        <>
            <BrowserView>
                <HomeRich/>
            </BrowserView>
            <MobileView>
                <HomeMobile/>
            </MobileView>
        </>
        // <div className="Home">
        //     <MuiThemeProvider theme={Look.theme}>
        //         <div className={classes.wrapper}>
        //             <HelloButton className={classes.homePageHeading} text={"HELLO"} onClick={hello}/>
        //         </div>
        //         <Footer className={classes.footerAbsolute}/>
        //     </MuiThemeProvider>
        // </div>
    );
}

function hello() {
    document.getElementById("helloText").innerHTML = hellos[Math.floor(Math.random() * 10)];
}

export default Home;