import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import "aos/dist/aos.css";
import AboutBrowser from "./browser/AboutBrowser";
import AboutMobile from "./mobile/AboutMobile";
import {blurBackdrop} from "../../App";


function About() {
    blurBackdrop();
    return (
        <>
            <BrowserView>
                <AboutBrowser/>
            </BrowserView>
            <MobileView>
                <AboutMobile/>
            </MobileView>
        </>
    );
}

export default About;