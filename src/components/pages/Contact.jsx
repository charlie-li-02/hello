import React from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import * as Look from "./Look";
import Stack from '@mui/material/Stack';
import HorizontalStackContacts from "../HorizontalStackContacts";
import EmailForm from "../EmailForm";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Footer from "../Footer";

function Contact() {
    const classes = Look.styles();

    return (
        <div className="Contact Me">
            <MuiThemeProvider theme={Look.theme}>
                <Typography variant="h1" className={classes.heading} color="primary">
                        CONTACT ME
                </Typography>
                <div className={classes.contactLayout}>
                    <Stack spacing={12} direction="row" >
                        <Stack spacing={3} direction="column" justifyContent="flex-start" alignItems="flex-start">
                            <div/>
                            <HorizontalStackContacts icon={<EmailIcon style={{fill: "#000000", height: "20", width: "20"}}/>} title="charlie.zh.li.1025@gmail.com" />
                            <HorizontalStackContacts icon={<PhoneIphoneIcon style={{fill: "#000000", height: "20", width: "20"}}/>} title="1-604-445-5935" />
                            <HorizontalStackContacts icon={<InstagramIcon style={{fill: "#000000", height: "20", width: "20"}}/>} title="@chvr.li.e" />
                            <HorizontalStackContacts icon={<GitHubIcon style={{fill: "#000000", height: "20", width: "20"}}/>} title="charlie-li-02" />
                            <HorizontalStackContacts icon={<LinkedInIcon style={{fill: "#000000", height: "20", width: "20"}}/>} title="linkedin.com/in/charlie-li-1025" />
                            <HorizontalStackContacts icon={<FacebookIcon style={{fill: "#000000", height: "20", width: "20"}}/>} title="facebook.com/Ch13fCharl3s" />
                        </Stack>
                        <Stack spacing={5} direction="column" justifyContent="flex-start" alignItems="flex-start">
                            <EmailForm/>
                        </Stack>
                    </Stack>
                </div>
                <div className={classes.hugeSpace}/>
                <Footer className={classes.footer} />
            </MuiThemeProvider>
        </div>
    );
}

export default Contact;