import React from "react";
import "aos/dist/aos.css";
import {BrowserView, MobileView} from "react-device-detect";
import ProjectsBrowser from "./browser/ProjectsBrowser";
import ProjectsMobile from "./mobile/ProjectsMobile";

function Projects() {
    const backdrop = document.getElementById('backdrop');
    if (backdrop !== null) {
        backdrop.style.backdropFilter = "blur(15px)";
    }
    return (
        <>
            <BrowserView>
                <ProjectsBrowser/>
            </BrowserView>
            <MobileView>
                <ProjectsMobile/>
            </MobileView>
        </>
    );
}

export default Projects;


