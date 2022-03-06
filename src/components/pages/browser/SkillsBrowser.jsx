import React, {useEffect} from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import * as Look from "../Look";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import StarStack from "../../StarStack";
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@mui/icons-material/Web';
import HandymanIcon from '@mui/icons-material/HandymanOutlined';
import AnalyticsIcon from '@mui/icons-material/AnalyticsOutlined'
import Footer from "../../Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsBrowser() {
    const classes = Look.styles();
    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);

    return (
        <div className="Skills">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        MY SKILLS
                    </Typography>
                </div>
                <Grid container style={{alignItems: "flex-start"}} className={classes.subHeading}>
                    <Grid item xs={3} data-aos="fade-up">
                        <Stack direction={"column"} style={{justifyItems: "center", alignItems: "center"}}>
                            <CodeIcon style={{fill: "000000", height:"100", width:"100"}}/>
                            <Typography variant="h6" color="primary" style={{fontSize:25}}>
                                Languages
                            </Typography>
                            <Stack direction={"column"} style={{alignItems: "flex-end"}} className={classes.subHeading}>
                                <StarStack text={"Java"} stars={5}/>
                                <StarStack text={"Python"} stars={4}/>
                                <StarStack text={"SQL"} stars={4}/>
                                <StarStack text={"C#"} stars={3.5}/>
                                <StarStack text={"C++"} stars={3.5}/>
                                <StarStack text={"C"} stars={3}/>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} data-aos="fade-up">
                        <Stack direction={"column"} style={{justifyItems: "center", alignItems: "center"}}>
                            <WebIcon style={{fill: "000000", height:"100", width:"100"}}/>
                            <Typography variant="h6" color="primary" style={{fontSize:25}}>
                                Web
                            </Typography>
                            <Stack direction={"column"} style={{alignItems: "flex-end"}} className={classes.subHeading}>
                                <StarStack text={"TypeScript"} stars={5}/>
                                <StarStack text={"JavaScript"} stars={4.5}/>
                                <StarStack text={"HTML/CSS"} stars={4}/>
                                <StarStack text={"Node.js"} stars={4}/>
                                <StarStack text={"React.js"} stars={3.5}/>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} data-aos="fade-up">
                        <Stack direction={"column"} style={{justifyItems: "center", alignItems: "center"}}>
                            <AnalyticsIcon style={{fill: "000000", height:"100", width:"100"}}/>
                            <Typography variant="h6" color="primary" style={{fontSize:25}}>
                                Testing
                            </Typography>
                            <Stack direction={"column"} style={{alignItems: "flex-end"}} className={classes.subHeading}>
                                <StarStack text={"JUnit"} stars={5}/>
                                <StarStack text={"Selenium"} stars={5}/>
                                <StarStack text={"unittest"} stars={4}/>
                                <StarStack text={"Mocha"} stars={4}/>
                                <StarStack text={"Chai"} stars={3.5}/>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3} data-aos="fade-up">
                        <Stack direction={"column"} style={{justifyItems: "center", alignItems: "center"}}>
                            <HandymanIcon style={{fill: "000000", height:"100", width:"100"}}/>
                            <Typography variant="h6" color="primary" style={{fontSize:25}}>
                                Tools
                            </Typography>
                            <Stack direction={"column"} style={{alignItems: "flex-end"}} className={classes.subHeading}>
                                <StarStack text={"IntelliJ"} stars={5}/>
                                <StarStack text={"Pycharm"} stars={5}/>
                                <StarStack text={"DataGrip"} stars={5}/>
                                <StarStack text={"Visual Studio Code"} stars={5}/>
                                <StarStack text={"Visual Studio"} stars={3}/>
                                <StarStack text={"Git"} stars={5}/>
                                <StarStack text={"Jira"} stars={5}/>
                                <StarStack text={"Postman"} stars={5}/>
                                <StarStack text={"Insomnia"} stars={5}/>
                                <StarStack text={"Jenkins"} stars={5}/>
                                <StarStack text={"Microsoft Azure"} stars={4.5}/>
                                <StarStack text={"Azure Data Studio"} stars={4}/>
                                <StarStack text={"SQL Server Management Studio"} stars={4}/>
                                <StarStack text={"Ansible Tower"} stars={4}/>
                                <StarStack text={"AWS"} stars={4}/>
                                <StarStack text={"Docker"} stars={4}/>
                                <StarStack text={"Sumo Logic"} stars={3.5}/>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Stack direction={"row"} style={{justifyContent:"center"}}>
                            <StarStack text={""} stars={0}/>
                            <Typography variant="h6" color="primary" style={{fontSize:15, textIndent: "12px"}}>
                                currently acquiring
                            </Typography>
                        </Stack>
                        <div className={classes.subHeading}/>
                    </Grid>
                </Grid>
                <Box sx={{bgcolor: "#000000"}} data-aos="fade-up">
                    <Container maxWidth={"md"}>
                        <Stack direction={"column"} style={{justifyContent: "center", alignItems: "center"}} >
                            <Typography variant="h4" className={classes.subHeading} color="secondary">
                                THERE IS MORE TO ME
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="secondary" align="center" style={{textIndent: "35px", marginBottom: "30px"}}>
                                Other than the industrial skills listed above, I am also a team player, a curious learner,
                                and an efficient worker. I can manage my time efficiently while multi-tasking, patiently
                                work towards the solution at the rise of potentially frustrating issues, and get creative
                                at times when it's needed. Through my experiences, I have honed my industrial skills as well as interpersonal skills,
                                allowing me to be an effective contributor to any team.
                            </Typography>
                        </Stack>
                    </Container>
                </Box>
                <div className={classes.bigSpace}/>
                <Footer className={classes.footer}/>
            </MuiThemeProvider>
        </div>
    );
}

export default SkillsBrowser;