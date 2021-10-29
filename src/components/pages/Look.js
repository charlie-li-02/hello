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
        position: "sticky",
        width: "25%",
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
        fontSize: "20px",
        marginTop: "5px",
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

})
