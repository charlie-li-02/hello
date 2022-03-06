import React from 'react'
import {Button} from  '@material-ui/core'
import {withStyles} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const StyledButton = withStyles({
    root: {
        margin: "auto",
        textAlign: "center",
        display: "flex",
        fontSize: "60px",
        alignItems: "center",
        justifyContent: "center",
        height: "41vmax",
        width: "40vmax",
        boxSizing: "content-box",
        borderRadius: 700,
        background: "#ffffff",
        color: "#000000",
        fill:"#000000",
        outline: "none",
        outlineOffset: "none",
        boxShadow: "0px 0px 0 0 #000000",
        "&:hover": {
            backgroundColor: "#000000",
            color: "#ffffff",
            outline: "none",
            outlineOffset: "none",
            fill: "#ffffff",
            boxShadow: "0px 0px 0 0 #000000",
        },
        "& .MuiTouchRipple-child":{
            transform: 'scale(0.75)',
            backgroundColor: "#ffffff",
            opacity: 1
        },
    },
    label: {
    },
})(Button);

function HelloButtonMobile(props) {
    const {text, onClick, disabled} = props;
    return (
        <StyledButton variant="contained" onClick={onClick} disabled={disabled}>
            <Stack direction={"column"} spacing={1}>
                <Typography variant="h1" color="inherit">
                    {text}
                </Typography>
                <Typography variant="h5" color="inherit"  style={{letterSpacing: "-2px"}}>
                    -------------------------------
                </Typography>
                <Typography variant="h5" id="helloText" color="inherit" style={{textTransform: "none", fontSize: "18px"}}>
                    My name is Charlie, nice to meet you :D
                </Typography>
            </Stack>
        </StyledButton>
    )
}

export default HelloButtonMobile