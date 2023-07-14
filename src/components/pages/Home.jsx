import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import HomeBrowser from "./browser/HomeBrowser";
import HomeMobile from "./mobile/HomeMobile";
function Home() {

    const backdrop = document.getElementById('backdrop');
    if (backdrop !== null) {
        backdrop.style.backdropFilter = "none";
    }
    return (
        <>
            <BrowserView>
                <HomeBrowser/>
            </BrowserView>
            <MobileView>
                <HomeMobile/>
            </MobileView>
        </>
    );
}

export default Home;