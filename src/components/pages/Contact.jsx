import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import ContactBrowser from "./browser/ContactBrowser";
import ContactMobile from "./mobile/ContactMobile";

function Contact() {
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