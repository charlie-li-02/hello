import React from 'react';
import * as Look from "./pages/Look";
import Stack from "@mui/material/Stack";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {Typography} from "@material-ui/core";

function StarRating(props) {
    const {stars} = props;
    if (stars === 5) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 4.5) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarHalfIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 4) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 3.5) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarHalfIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 3) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 2.5) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarHalfIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 2) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 1.5) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarHalfIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 1) {
        return (
            <div>
                <StarIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 0.5) {
        return (
            <div>
                <StarHalfIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
                <StarBorderIcon style={{fill:"#ffffff"}}/>
            </div>
        )
    } else if (stars === 0) {
        return (
            <div>
                <StarIcon style={{fill: "#4f4f4f"}}/>
                <StarIcon style={{fill: "#4f4f4f"}}/>
                <StarIcon style={{fill: "#4f4f4f"}}/>
                <StarIcon style={{fill: "#4f4f4f"}}/>
                <StarIcon style={{fill: "#4f4f4f"}}/>
            </div>
        )
    }
}


function StarStack(props) {
    const classes = Look.styles();
    const {text, stars} = props;
    return (
        <Stack direction="row" spacing={3} style={{alignItems: "flex-end", justifyContent: "center"}}>
            <Typography variant="h6" className={classes.body} color="primary">
                {text}
            </Typography>
            <StarRating stars={stars}/>
        </Stack>
    );
}

export default StarStack;