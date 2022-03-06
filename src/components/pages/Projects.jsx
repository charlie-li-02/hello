import React from "react";
import "aos/dist/aos.css";
import {BrowserView, MobileView} from "react-device-detect";
import ProjectsBrowser from "./browser/ProjectsBrowser";
import ProjectsMobile from "./mobile/ProjectsMobile";

function Projects() {
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


