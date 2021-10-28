import React from 'react'
import {Button} from  '@material-ui/core'
import {withStyles} from "@material-ui/core";

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#ffffff",
        color: "#123",
        transform: "none",
        boxShadow: "0px 0px 0 0 #000000",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#123456"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function CustomButton() {
    return (
        <StyledButton>Hello</StyledButton>
    )
}

export default CustomButton