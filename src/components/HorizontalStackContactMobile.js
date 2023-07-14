import React from 'react'
import {Typography} from '@material-ui/core'
import * as Look from "./pages/LookMobile"
import Stack from '@mui/material/Stack';


function HorizontalStackContactsMobile(props) {
    const {icon, title} = props;
    const classes = Look.styles();
    return (
        <div className={classes.horizontalStackContacts}>
            <Stack spacing={3} direction="row" >
                <div>{icon}</div>
                <Typography align={"left"} style={{fontSize:"15px", color: "#ffffff"}}>{title}</Typography>
            </Stack>
        </div>
    )
}

export default HorizontalStackContactsMobile