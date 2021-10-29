import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import {Typography, styled} from "@material-ui/core";
import ActionButton from "./ActionButton";
import * as Look from "./pages/Look";


const TextFieldStyled = styled(TextField) ({
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'black',
        },
        '&:hover fieldset': {
            borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    },
})

function EmailForm() {
    const classes = Look.styles();
    return (
        <Box
            component="form"
            sx={{
                width: 500,
                maxWidth: "100%"
            }}
            noValidate
            autoComplete="off"
        >
            <Stack spacing={4} direction="column" className={classes.emailForm}>
                <Typography variant="h6" align={"left"} >SEND ME A MESSAGE </Typography>
                <TextFieldStyled
                    required
                    id="name-input"
                    label="Required"
                    defaultValue="Name"
                    variant="standard"
                    onFocus={event => {
                        if (event.target.value === 'Name') {
                            event.target.value = '';
                        }
                    }}
                />
                <TextFieldStyled
                    required
                    id="email-input"
                    label="Required"
                    defaultValue="Email"
                    variant="standard"
                    onFocus={event => {
                        if (event.target.value === 'Email') {
                            event.target.value = '';
                        }
                    }}
                />
                <TextFieldStyled
                    required
                    id="subject-input"
                    label="Required"
                    defaultValue="Subject"
                    variant="standard"
                    onFocus={event => {
                        if (event.target.value === 'Subject') {
                            event.target.value = '';
                        }
                    }}
                />
                <TextFieldStyled
                    required
                    id="message-input"
                    multiline
                    rows={8}
                    label="Required"
                    defaultValue="Enter a message"
                    variant="outlined"
                    fullWidth
                    onFocus={event => {
                        if (event.target.value === 'Enter a message') {
                            event.target.value = '';
                        }
                    }}
                />
                <ActionButton text={"SEND"} onClick={sendEmail}/>
            </Stack>
            </Box>
    );
}



function sendEmail() {
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let subject = document.getElementById("subject-input").value;
    let message = document.getElementById("message-input").value;

    const Mail = require('../utils/mail');

    const options = {
        subject: subject,
        message: message
    }

    const mail = new Mail({
        subject: options.subject,
        message: options.message,
        errorCallback: function(err) {
            console.log('error: ' + err);
        }
    });

    mail.send();

    // let senderEmail = 'charlie.website.message@gmail.com';
    // let receiverEmail = 'charlie.zh.li.1025@gmail.com';
    //
    // let emailObj = {
    //     from: senderEmail,
    //     to: receiverEmail,
    //     subject: subject,
    //     text: message
    // };
    //
    // const nodemailer = require('nodemailer');
    //
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     auth: {
    //         user:  senderEmail,
    //         pass: '5Za598BY9ARiWa^8b5eu!iIKhKhzXq'
    //     }
    // });
    //
    // transporter.sendMail(emailObj, function(error, info){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
}

export default EmailForm