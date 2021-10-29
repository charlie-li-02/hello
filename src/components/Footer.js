import React from 'react'
import {BottomNavigation, BottomNavigationAction, makeStyles} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const gitHubURL = "https://github.com/charlie-li-02";
const instagramURL = "https://www.instagram.com/chvr.li.e/";
const linkedInURL = "https://www.linkedin.com/in/charlie-li-1025/";
const facebookURL = 'https://www.facebook.com/Ch13fCharl3s/';

const styles = makeStyles({
    wrapper: {
        background: "none",
        position: "fixed",
        bottom: "10px",
        left: "50%",
        msTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)"
    },
})

function Footer() {
    const classes = styles();

    return (
        <BottomNavigation className={classes.wrapper}>
            <BottomNavigationAction label="GitHub" icon={<GitHubIcon style={{fill: "#000000"}}/>} onClick={openGitHub}/>
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#000000"}}/>} onClick={openInstagram}/>
            <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon style={{fill: "#000000"}}/>} onClick={openLinkedIn}/>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#000000"}}/>} onClick={openFacebook}/>
        </BottomNavigation>
    )
}

function openGitHub() {
    window.open(gitHubURL, '_blank').focus();
}

function openInstagram() {
    window.open(instagramURL, '_blank').focus();
}

function openLinkedIn() {
    window.open(linkedInURL, '_blank').focus();
}

function openFacebook() {
    window.open(facebookURL, '_blank').focus();
}

export default Footer