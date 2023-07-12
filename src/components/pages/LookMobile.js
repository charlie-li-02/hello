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
    },
})

export const themeDark = createTheme({
    palette: {
        background: {
            default: "#121212"
        },
        primary: {
            main: "#ffffff",
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
});

export const styles = makeStyles({
    wrapper: {
        margin: "auto",
        textAlign: "center"
    },
    homeWrapper: {
        margin: "auto",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    },
    homePageHeading: {
        cursor: "pointer",
    },
    homePageSubHeading:{
        marginTop: "2rem",
    },
    heading: {
        position: "sticky",
        width: "auto",
        margin: "auto",
        marginTop: "1rem",
        fontSize: "35px",
        textAlign: "center",
    },
    subHeading:{
        marginTop: "0.5rem",
        fontSize: "25px"
    },
    body: {
        fontSize: "13px",
        marginTop: "10px",
    },
    starStack: {
        fontSize: "13px",
        marginTop: "2px",
    },
    disclaimer: {
        fontSize: "6px",
        marginTop: "1px",
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
        marginLeft: "1rem",
        position: "sticky",
        display: "flex",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    emailForm: {
        width: "200px"
    },
    footerAbsolute: {
        background: "none",
        position: "absolute",
        bottom: "0.5vmax",
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
    hugeSpace:{
        marginTop: "6rem",
    },
    bigSpace:{
        marginTop: "4rem",
    },
    smallSpace:{
        marginTop: "2rem",
    },
    tinySpace:{
        marginTop: "1rem",
    },
})
