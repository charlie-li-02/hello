import {createTheme, makeStyles} from "@material-ui/core";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#131313",
        },
        secondary: {
            main: "#ffffff",
        },
        typography: {
            fontFamily: [
                'helvetica'
            ]
        }
    }
})

export const styles = makeStyles({
    wrapper: {
        position: "sticky",
        width: "25%",
        margin: "auto",
        textAlign: "center"
    },
    heading: {
        cursor: "pointer",
        marginTop: "15rem",
        "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            textDecorationThickness: "3px"
        }
    },
    subHeading:{
        marginTop: "2rem",
    },
    grid:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },

})
