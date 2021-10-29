import React from 'react'
import {Button} from  '@material-ui/core'
import {withStyles} from "@material-ui/core";

const StyledButton = withStyles({
    root: {
        display: "flex",
        fontSize: "13px",
        alignItems: "center",
        justifyContent: "center",
        height: "30px",
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
    },
})(Button);

function ActionButton(props) {
    const {text, onClick} = props;
    return (
        <StyledButton variant="contained" onClick={onClick} >{text}</StyledButton>
    )
}

export default ActionButton