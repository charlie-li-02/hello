import React from 'react'
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#000000"}}/>}/>
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#000000"}}/>}/>
            <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon style={{fill: "#000000"}}/>}/>
            <BottomNavigationAction label="GitHub" icon={<GitHubIcon style={{fill: "#000000"}}/>}/>
        </BottomNavigation>
    )
}

export default Footer