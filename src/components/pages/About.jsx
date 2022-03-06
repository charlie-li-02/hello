import React, {useEffect} from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import Container from '@material-ui/core/Container'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Footer from "../Footer";
import {BrowserView, MobileView} from "react-device-detect";
import * as Look from "./Look";
import {Divider} from "@mui/material";
import AOS from 'aos';
import "aos/dist/aos.css";
import AboutBrowser from "./browser/AboutBrowser";
import AboutMobile from "./mobile/AboutMobile";


function About() {
    const classes = Look.styles();

    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);

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