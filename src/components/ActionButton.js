import React from 'react'
import {Button} from  '@material-ui/core'
import {withStyles} from "@material-ui/core";

const StyledButton = withStyles({
    root: {
        display: "flex",
        fontSize: "20px",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        boxSizing: "content-box",
        borderRadius: 0,
        background: "#000000",
        color: "#ffffff",
        fill:"#000000",
        outline: "none",
        outlineOffset: "none",
        boxShadow: "0px 0px 0 0 #000000",
        "&:hover": {
            backgroundColor: "#ffffff",
            color: "#000000",
            outline: "none",
            outlineOffset: "none",
            fill: "#ffffff",
            boxShadow: "0px 0px 0 0 #000000"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function ActionButton(text) {
    return (
        <StyledButton variant="contained">{text.txt}</StyledButton>
    )
}

export default ActionButton