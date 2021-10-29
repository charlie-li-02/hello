import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import {Typography, styled} from "@material-ui/core";
import ActionButton from "./ActionButton";
import * as Look from "./pages/Look";
import{ init } from 'emailjs-com';
import * as emailjs from "emailjs-com";
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