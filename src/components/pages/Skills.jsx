import React from "react";
import "aos/dist/aos.css";
import {BrowserView, MobileView} from "react-device-detect";
import SkillsBrowser from "./browser/SkillsBrowser";
import SkillsMobile from "./mobile/SkillsMobile";

function Skills() {
    return (
        <>
            <BrowserView>
                <SkillsBrowser/>
            </BrowserView>
            <MobileView>
                <SkillsMobile/>
            </MobileView>
        </>
    );
}

export default Skills;