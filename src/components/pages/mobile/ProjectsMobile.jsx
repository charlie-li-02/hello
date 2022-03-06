import React, {useEffect} from "react";
import {MuiThemeProvider, Typography, Link} from "@material-ui/core";
import * as Look from "../LookMobile";
import Grid from "@mui/material/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Stack from "@mui/material/Stack";
import Footer from "../../Footer";
import websiteImage from '../images/website.jpg';
import insightImage from '../images/insight.jpg';
import guava1 from '../images/guava1.jpg';
import guava2 from '../images/guava2.jpg';
import guava3 from '../images/guava3.png';
import asc1 from '../images/asc1.jpg';
import asc2 from '../images/asc2.jpg';
import asc3 from '../images/asc3.jpg';
import asc4 from '../images/asc4.jpg';
import tick1 from '../images/tick1.jpg';
import shooter1 from '../images/shooter1.jpg';
import shooter2 from '../images/shooter2.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";

const personalWebsiteRepoLink = "https://github.com/charlie-li-02/Hello";
const ASCRepoLink = "https://github.com/charlie-li-02/asc";
const tickRepoLink = "https://github.com/charlie-li-02/tick";

function Projects() {
    const classes = Look.styles();

    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);

    return (
        <div className="Projects">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        PERSONAL PROJECTS
                    </Typography>
                </div>
                <div className={classes.bigSpace} />
                <Grid container spacing={2} style={{alignItems: "center"}}>
                    <Grid item xs={12} data-aos="fade-up" >
                        <Container maxWidth="sm">
                            <img src={websiteImage} style={{maxWidth:"90%", maxHeight:"90%"}} alt="website" border="1px solid #000000"/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "18px", fontWeight: "bold"}}>
                                    Personal Website
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "13px", whiteSpace:"nowrap"}}>
                                    October 2021 - March 2022
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <b>Skills:</b> JavaScript, React.js, Material-UI
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                You are probably (most definitely) looking at it right now. This website is built with
                                JavaScript and React.js by me, from scratch, along with the Material-UI component library.
                                This project was intended for me to experiment and learn about JavaScript and React.js,
                                while attempting to make an aesthetically pleasing, minimalistic personal portfolio website to showcase my experiences.
                            </Typography>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
                                <div className={classes.body}/>
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "13px", fontWeight: "bold"}} onClick={() => {
                                    window.open(personalWebsiteRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider/>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="column" alignItems="center" spacing={1}>

                                <Typography variant="h5" color="primary" align="center" style={{fontSize: "18px", fontWeight: "bold"}}>
                                    Insight UBC
                                </Typography>
                                <Typography variant="h6" color="primary" align="center" style={{fontSize: "13px", whiteSpace:"nowrap"}}>
                                    September 2020 - December 2020
                                </Typography>
                                <img src={insightImage} style={{maxWidth:"100%", maxHeight:"100%"}} alt="insight" border="1px solid #000000"/>
                                <Container maxWidth="md" data-aos="fade-up">
                                    <Typography variant="h6" className={classes.body} color="primary" align="center">
                                        <b>Skills:</b> TypeScript, JavaScript, Node.js, HTML, Mocha, Chai
                                    </Typography>
                                    <Typography variant="h6" className={classes.body} color="primary" align="center" style={{textIndent: "20px"}}>
                                        Before the start of every semester, some questions often come to the mind of many UBC students:
                                        "is the course I'm taking worth it? Is the professor teaching this course good? How have people
                                        historically performed in this course?"
                                    </Typography>
                                    <Typography variant="h6" className={classes.body} color="primary" align="center" style={{textIndent: "20px"}}>
                                        InsightUBC is a RESTful application that can perform queries on courses, prerequisites,
                                        historical averages for courses, room scheduling, and timetable creation with real metadata
                                        provided by UBC PAIR. I and a partner designed and implemented data loading by parsing JSON and
                                        HTML files that were provided and developed a query engine that allows users to execute complex
                                        queries to find exactly what they are looking for.
                                    </Typography>
                                </Container>
                            </Stack>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider/>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up" >
                        <Stack direction="rows" spacing={0} justifyContent={"center"}>
                            <Container maxWidth="sm">
                                <img src={guava1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="guava2" alt="guava1" border="1px solid #000000"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={guava2} style={{maxWidth:"101%", maxHeight:"101%"}} alt="guava2" border="1px solid #000000"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={guava3} style={{maxWidth:"100%", maxHeight:"100%"}} alt="guava3" border="1px solid #000000"/>
                            </Container>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "18px", fontWeight: "bold"}}>
                                    Guava
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                    September 2020 - December 2020
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <b>Skills:</b> Java, SQL, Oracle, JavaFX, FXML, CSS
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Organizing groceries could be a headache, especially if you have many places in the house
                                to put them away, you could easily lose track of which is going to expire soon.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                To help solve this problem, I and two partners developed Guava, a grocery organizer that is built
                                on top of a relational database model. Aside from developing the database schemas, I have designed
                                and implemented the GUI that allows users to easily track what groceries they have, when they will go bad,
                                the nutritional values of each food item, as well as recipes that can be made with their current groceries.
                            </Typography>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider/>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up" >
                        <Stack direction="rows" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={asc1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc1" border="1px solid #000000"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={asc2} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc2" border="1px solid #000000"/>
                            </Container>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "18px", fontWeight: "bold"}}>
                                    A Simple Closet
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                    May 2020 - July 2020
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <b>Skills:</b> Java, JUnit, JavaFX, FXML, CSS
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                Being slightly into fashion and collecting sneakers, "I thought why not create my own application to
                                organize my collection since it seems like there are no better ways to organize it than using a spreadsheet
                                to see what I have and what I don't have?"
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                So, I designed and implemented a closet managing application that allows users to import items along with
                                a description, specifications such as sizes and colour, as well as images to easily organize any collection
                                into categories. The application was tested thoroughly with JUnit backend tests,
                                and the GUI was developed with JavaFX, FXML, and CSS.
                            </Typography>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
                                <div className={classes.body}/>
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "13px", fontWeight: "bold"}} onClick={() => {
                                    window.open(ASCRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up" >
                        <Stack direction="rows" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={asc3} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc3" border="1px solid #000000"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={asc4} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc4" border="1px solid #000000"/>
                            </Container>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up" >
                        <Stack direction="column" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={tick1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="tick1" border="1px solid #000000"/>
                            </Container>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "18px", fontWeight: "bold"}}>
                                    Tick
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                    September 2019 - December 2019
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <b>Skills:</b> Java, JUnit, Swing
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Task management is the foundation of any success, whether in school or at work.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Tick is a simple and easy to use to do list application with a reminder feature, as well as
                                a weather forecast widget with data extracted from an API that will keep users up to date with
                                the weather as they are heading in or out of work. The GUI was implemented with Java and Swing
                            </Typography>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
                                <div className={classes.body}/>
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "13px", fontWeight: "bold"}} onClick={() => {
                                    window.open(tickRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>


                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider/>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up" >
                        <Stack direction="column" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={shooter1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="shooter1" border="1px solid #000000"/>
                            </Container>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "18px", fontWeight: "bold"}}>
                                    2-D Shooter
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                    September 2017 - January 2018
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <b>Skills:</b> Python, Pygame
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Creating my own video game has always been a goal, though simple, it was achieved with this personal
                                project.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                I and a partner created an original horizontally-scrolling, 2-D shooter game. We designed the
                                player controlled unit as well as the different enemy classes ourselves, and we have added
                                various sound effects including shooting, being hit and more. Collision detection with
                                sprites was achieved using Pygame.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up" >
                        <Stack direction="column" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={shooter2} style={{maxWidth:"100%", maxHeight:"100%"}} alt="shooter2" border="1px solid #000000"/>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>

                <div className={classes.bigSpace}/>
                <Footer className={classes.footer}/>
            </MuiThemeProvider>
        </div>
    );
}

export default Projects;


