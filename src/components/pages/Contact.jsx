import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import ContactBrowser from "./browser/ContactBrowser";
import ContactMobile from "./mobile/ContactMobile";

function Contact() {
    const backdrop = document.getElementById('backdrop');
    if (backdrop !== null) {
        backdrop.style.backdropFilter = "blur(15px)";
    }
    return (
        <>
            <BrowserView>
                <ContactBrowser/>
            </BrowserView>
            <MobileView>
                <ContactMobile/>
            </MobileView>
        </>
    );
}

export default Contact;