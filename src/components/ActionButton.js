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
        background: "#efefef",
        color: "#121212",
        fill:"#ffffff",
        outline: "none",
        outlineOffset: "none",
        boxShadow: "0px 0px 0 0 #000000",
        "&:hover": {
            backgroundColor: "#121212",
            color: "#ffffff",
            outline: "none",
            outlineOffset: "none",
            fill: "#121212",
            boxShadow: "0px 0px 0 0 #000000"
        },
        "&.Mui-disabled": {
            background: "#3e3e3e",
            color: "#888888"
        }
    },
    label: {
    },
})(Button);

function ActionButton(props) {
    const {text, onClick, disabled} = props;
    return (
        <StyledButton variant="contained" onClick={onClick} disabled={disabled}>{text}</StyledButton>
    )
}

export default ActionButton