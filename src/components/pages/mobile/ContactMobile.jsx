import React from "react";
import * as Look from "../LookMobile";
import Stack from '@mui/material/Stack';
import HorizontalStackContacts from "../../HorizontalStackContactMobile";
import EmailForm from "../../EmailFormMobile";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Footer from "../../Footer";
import {TypeAnimation} from "react-type-animation";

function ContactMobile() {
    const classes = Look.styles();

    return (
            <div className="Contact Me">
            <TypeAnimation
                style={{
                    fontSize: '25px',
                    textAlign: 'left',
                    marginTop: "4em",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#ffffff"
                }}
                sequence={"CONTACT ME"}
                repeat={0}
                className={classes.heading}/>
                <div className={classes.contactLayout}>
                    <Stack spacing={5} direction="column" justifyContent="center" alignItems="center">
                        <Stack spacing={1} direction="column" justifyContent="flex-start" alignItems="flex-start">
                            <div/>
                            <HorizontalStackContacts icon={<EmailIcon style={{fill: "#ffffff", height: "20", width: "20"}}/>} title="charlie.zh.li.1025@gmail.com" />
                            <HorizontalStackContacts icon={<PhoneIphoneIcon style={{fill: "#ffffff", height: "20", width: "20"}}/>} title="1-604-445-5935" />
                            <HorizontalStackContacts icon={<InstagramIcon style={{fill: "#ffffff", height: "20", width: "20"}}/>} title="@chvr.li.e" />
                            <HorizontalStackContacts icon={<GitHubIcon style={{fill: "#ffffff", height: "20", width: "20"}}/>} title="charlie-li-02" />
                            <HorizontalStackContacts icon={<LinkedInIcon style={{fill: "#ffffff", height: "20", width: "20"}}/>} title="linkedin.com/in/charlie-li-1025" />
                            <HorizontalStackContacts icon={<FacebookIcon style={{fill: "#ffffff", height: "20", width: "20"}}/>} title="facebook.com/Ch13fCharl3s" />
                        </Stack>
                        <Stack spacing={12} direction="row" justifyContent="flex-start" alignItems="flex-start">
                            <EmailForm/>
                        </Stack>

                        <Stack spacing={12} direction="row" justifyContent="flex-start" alignItems="flex-start">
                            <div className={classes.smallSpace}/>
                        </Stack>
                        <Stack spacing={12} direction="row" justifyContent="flex-start" alignItems="flex-start">
                            <Footer className={classes.footer}/>
                        </Stack>
                        <Stack spacing={12} direction="row" justifyContent="flex-start" alignItems="flex-start">
                            <div className={classes.bigSpace}/>
                        </Stack>
                    </Stack>
                </div>
        </div>
    );
}

export default ContactMobile;