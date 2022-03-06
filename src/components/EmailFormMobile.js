import * as React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import {Typography, styled} from "@material-ui/core";
import ActionButton from "./ActionButton";
import * as Look from "./pages/Look";
import{ init } from 'emailjs-com';
import * as emailjs from "emailjs-com";
import {useState} from "react";
init("user_jG4QtTBI0VeQsSypNIHkH");


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

function EmailFormMobile() {
    const classes = Look.styles();
    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            setIsEmailInvalid(false);
        } else {
            setIsEmailInvalid(true);
        }
    }

    const validateForm = () => {
        const name = document.getElementById("name-input").value;
        const email = document.getElementById("email-input").value;
        const subject = document.getElementById("subject-input").value;
        const message = document.getElementById("message-input").value;
        if ((name !== 'Name' || name !== '') && (email !== 'Email' && email !== '')
            && (subject !== 'Subject' && subject !== '') && (message !== 'Message' && message !== '')
            && !isEmailInvalid) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }

    return (
        <Container
            component="form"
            noValidate
            autoComplete="off"
        >
            <Stack spacing={4} direction="column" alignItems="center" className={classes.emailForm}>
                <Typography variant="h6" align={"center"} style={{fontSize: "18px"}}>SEND ME A MESSAGE </Typography>
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
                    onBlur={event => {
                        if (event.target.value === '') {
                            event.target.value = 'Name';
                        }
                        validateForm();
                    }}
                    InputProps={{style:{fontSize:"15px"}}}
                    InputLabelProps={{ shrink: true, style:{fontSize:"13px"}}}
                />
                <TextFieldStyled
                    required
                    id="email-input"
                    label="Required"
                    defaultValue="Email"
                    variant="standard"
                    error={isEmailInvalid}
                    helperText={isEmailInvalid? 'Invalid email address' : ''}
                    onFocus={event => {
                        if (event.target.value === 'Email') {
                            event.target.value = '';
                        }
                    }}
                    onBlur={event => {
                        if (event.target.value === '') {
                            event.target.value = 'Email';
                        } else {
                            validateEmail(event.target.value)
                        }
                        validateForm();
                    }}
                    InputProps={{style:{fontSize:"15px"}}}
                    InputLabelProps={{ shrink: true, style:{fontSize:"13px"}}}
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
                    onBlur={event => {
                        if (event.target.value === '') {
                            event.target.value = 'Subject';
                        }
                        validateForm();
                    }}
                    InputProps={{style:{fontSize:"15px"}}}
                    InputLabelProps={{ shrink: true, style:{fontSize:"13px"}}}
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
                    style={{width:"300px"}}
                    onFocus={event => {
                        if (event.target.value === 'Enter a message') {
                            event.target.value = '';
                        }
                    }}
                    onBlur={event => {
                        if (event.target.value === '') {
                            event.target.value = 'Enter a message';
                        }
                        validateForm();
                    }}
                    InputProps={{style:{fontSize:"15px"}}}
                    InputLabelProps={{ shrink: true, style:{fontSize:"13px"}}}
                />
                <ActionButton text={"SEND"} onClick={sendEmail} disabled={isButtonDisabled}/>
            </Stack>
        </Container>
    );
}


function sendEmail() {
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let subject = document.getElementById("subject-input").value;
    let message = document.getElementById("message-input").value;



    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        notes: subject,
    };

    emailjs.send('website', 'website-template', templateParams)
        .then(function(response) {
            window.alert("Message sent!");
        }, function(error) {
            console.log(error);
        });
}



export default EmailFormMobile