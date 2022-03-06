import React, {useEffect} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import * as Look from "./Look";
import AOS from 'aos';
import "aos/dist/aos.css";
import AboutBrowser from "./browser/AboutBrowser";
import AboutMobile from "./mobile/AboutMobile";


function About() {
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