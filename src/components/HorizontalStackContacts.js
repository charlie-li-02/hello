import React from 'react'
import {Typography} from '@material-ui/core'
import * as Look from "./pages/Look"
import Stack from '@mui/material/Stack';


function HorizontalStackContacts(props) {
    const {icon, title} = props;
    const classes = Look.styles();
    return (
        <div className={classes.horizontalStackContacts}>
            <Stack spacing={3} direction="row" >
                <div>{icon}</div>
                <Typography align={"left"}>{title}</Typography>
            </Stack>
        </div>
    )
}

export default HorizontalStackContacts