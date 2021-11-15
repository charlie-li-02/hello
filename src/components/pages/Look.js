import {createTheme, makeStyles} from "@material-ui/core";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
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
        width: "50%",
        margin: "auto",
        textAlign: "center"
    },
    homePageHeading: {
        cursor: "pointer",
        marginTop: "15rem",
        "&:hover": {
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            textDecorationThickness: "3px"
        }
    },
    homePageSubHeading:{
        marginTop: "2rem",
    },
    heading: {
        position: "sticky",
        width: "500px",
        margin: "auto",
        fontSize: "60px",
        textAlign: "center",
    },
    subHeading:{
        marginTop: "2rem",
    },
    body: {
        fontSize: "18px",
        marginTop: "10px",
    },
    horizontalStackContacts:{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    contactLayout: {
        marginTop: "2rem",
        marginLeft: "10rem",
        position: "sticky",
        display: "flex",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    emailForm: {
        width: "500px"
    },
    footerAbsolute: {
        background: "none",
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "auto",
        textAlign: "center"
    },
    footer: {
        background: "none",
        margin: "auto",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    bigSpace:{
        marginTop: "4rem",
    },
})
