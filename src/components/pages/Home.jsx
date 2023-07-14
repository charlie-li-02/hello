import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import HomeBrowser from "./browser/HomeBrowser";
import HomeMobile from "./mobile/HomeMobile";
import {unblurBackdrop} from "../../App";
function Home() {
    unblurBackdrop();
    return (
        <div id={"homeview"}>
            <BrowserView>
                <HomeBrowser/>
            </BrowserView>
            <MobileView>
                <HomeMobile/>
            </MobileView>
        </div>
    );
}


export default Home;