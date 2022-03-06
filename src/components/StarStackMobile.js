import React from 'react';
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
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 4.5) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarHalfIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 4) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 3.5) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarHalfIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 3) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 2.5) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarHalfIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 2) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 1.5) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarHalfIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 1) {
        return (
            <div>
                <StarIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 0.5) {
        return (
            <div>
                <StarHalfIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
                <StarBorderIcon style={{fontSize: "12px"}}/>
            </div>
        )
    } else if (stars === 0) {
        return (
            <div>
                <StarIcon style={{fill: "#d9d9d9", fontSize: "12px"}}/>
                <StarIcon style={{fill: "#d9d9d9", fontSize: "12px"}}/>
                <StarIcon style={{fill: "#d9d9d9", fontSize: "12px"}}/>
                <StarIcon style={{fill: "#d9d9d9", fontSize: "12px"}}/>
                <StarIcon style={{fill: "#d9d9d9", fontSize: "12px"}}/>
            </div>
        )
    }
}


function StarStackMobile(props) {
    const {text, textFont, stars} = props;
    return (
        <Stack direction="row" spacing={1} style={{alignItems: "flex-end", justifyContent: "center"}}>
            <Typography variant="h6" color="primary" style={{fontSize: textFont? textFont:"13px", marginTop: "5px"}}>
                {text}
            </Typography>
            <StarRating stars={stars}/>
        </Stack>
    );
}

export default StarStackMobile;