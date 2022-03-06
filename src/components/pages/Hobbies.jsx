import React from "react";
import "aos/dist/aos.css";
import {BrowserView, MobileView} from "react-device-detect";
import HobbiesBrowser from "./browser/HobbiesBrowser";
import HobbiesMobile from "./mobile/HobbiesMobile";

function Hobbies() {
    return(
        <>
            <BrowserView>
                <HobbiesBrowser/>
            </BrowserView>
            <MobileView>
                <HobbiesMobile/>
            </MobileView>
        </>
    );
}

export default Hobbies;