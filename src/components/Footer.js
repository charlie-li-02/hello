import React from 'react'
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const gitHubURL = "https://github.com/charlie-li-02";
const instagramURL = "https://www.instagram.com/chvr.li.e/";
const linkedInURL = "https://www.linkedin.com/in/charlie-li-1025/";
const facebookURL = 'https://www.facebook.com/Ch13fCharl3s/';

function Footer(props) {
    const {className} = props;
    return (
        <BottomNavigation className={className}>
            <BottomNavigationAction label="GitHub" icon={<GitHubIcon style={{fill: "#ffffff"}}/>} onClick={openGitHub}/>
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#ffffff"}}/>} onClick={openInstagram}/>
            <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon style={{fill: "#ffffff"}}/>} onClick={openLinkedIn}/>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#ffffff"}}/>} onClick={openFacebook}/>
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