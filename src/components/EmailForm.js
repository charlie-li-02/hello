import * as React from 'react';
import Box from '@mui/material/Box';
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
    '& .MuiInputBase-root': {
        color: 'white',
    },
    '& .MuiFormLabel-root': {
        color: 'white',
    },
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: '#8f8f8f',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
})

function EmailForm() {
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
                <Typography variant="h6" align={"left"} style={{color: "#ffffff"}}>SEND ME A MESSAGE </Typography>
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
                    InputLabelProps={{ shrink: true }}
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
                    InputLabelProps={{ shrink: true }}
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
                    InputLabelProps={{ shrink: true }}
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
                    onBlur={event => {
                        if (event.target.value === '') {
                            event.target.value = 'Enter a message';
                        }
                        validateForm();
                    }}
                    InputLabelProps={{ shrink: true }}
                />
                <ActionButton text={"SEND"} onClick={sendEmail} disabled={isButtonDisabled}/>
            </Stack>
            </Box>
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



export default EmailForm