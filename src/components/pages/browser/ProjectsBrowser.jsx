import React, {useEffect} from "react";
import {Typography, Link} from "@material-ui/core";
import * as Look from "../Look";
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
import bloq1 from '../images/bloq1.png';
import bloq2 from '../images/bloq2.png';
import flow from '../images/flow.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import {TypeAnimation} from "react-type-animation";

const personalWebsiteRepoLink = "https://github.com/charlie-li-02/Hello";
const ASCRepoLink = "https://github.com/charlie-li-02/asc";
const tickRepoLink = "https://github.com/charlie-li-02/tick";
const flowRepoLink = "https://github.com/charlie-li-02/flow";
const bloqRepoLink = "https://github.com/charlie-li-02/Bloq";

function ProjectsBrowser() {
    const classes = Look.styles();

    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);

    return (
        <div className="Projects">
                <div className={classes.wrapper}>
                    <TypeAnimation
                        style={{
                            fontSize: '50px',
                            textAlign: 'left',
                            marginTop: "4em",
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "#ffffff"
                        }}
                        sequence={"PERSONAL PROJECTS"}
                        repeat={0}
                        className={classes.heading}/>
                </div>
                <div className={classes.bigSpace} />
                <Grid container spacing={8} style={{alignItems: "center"}}>
                    <Grid item xs={5} data-aos="fade-up" >
                        <Container maxWidth="sm">
                            <img src={flow} style={{maxWidth:"110%", maxHeight:"110%"}} alt="flow" />
                        </Container>
                    </Grid>
                    <Grid item xs={7} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    flow
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    June 2022 - June 2022
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> JavaScript, React.js, Esprima, Mermaid, Material-UI
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                Ever worked on a complicated new project that has multiple layers of inheritance, imports or dependencies and
                                don't know where to start to change something? By parsing the given code base with
                                Javascript and visualizing the analysis, me and four other team members were able to combat this common issue
                                many developers face. Flow is a call graph analyzer for JavaScript that gives users an
                                easy and quick way to visually see the structural overview of a given project with the click of a button.
                            </Typography>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
                                <div className={classes.body}/>
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "18px", color: "#ECB22E"}} onClick={() => {
                                    window.open(flowRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider style={{background: "#8f8f8f"}}/>
                        </Container>
                    </Grid>


                    <Grid item xs={7} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    Bloq
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    May 2022 - June 2022
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> Java, JavaFX, ANTLR, Python
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                Aimed to be quick and easy to pick up, Bloq is a domain specific language that generates 2D tile maps designed
                                to simplify the process of game design. Me and four other team members implemented the tokenizer, parser and evaluator
                                of our domain specific language with Java. Then, the image generation backend was done in Python. I created a GUI
                                with JavaFX to enable easy code editing, image output and testing.
                            </Typography>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
                                <div className={classes.body}/>
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "18px", color: "#ECB22E"}} onClick={() => {
                                    window.open(bloqRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>
                    <Grid item xs={5} data-aos="fade-up" >
                        <Stack direction="column" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={bloq1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="bloq1"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={bloq2} style={{maxWidth:"100%", maxHeight:"100%"}} alt="bloq2"/>
                            </Container>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider style={{background: "#8f8f8f"}}/>
                        </Container>
                    </Grid>

                    <Grid item xs={5} data-aos="fade-up" >
                        <Container maxWidth="sm">
                            <img src={websiteImage} style={{maxWidth:"110%", maxHeight:"110%"}} alt="website" />
                        </Container>
                    </Grid>
                    <Grid item xs={7} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    Personal Website
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    October 2021 - March 2022
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> JavaScript, React.js, Material-UI
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                You are probably (most definitely) looking at it right now. This website is built with
                                JavaScript and React.js by me, from scratch, along with the Material-UI component library.
                                This project was intended for me to experiment and learn about JavaScript and React.js,
                                while attempting to make an aesthetically pleasing, minimalistic personal portfolio website to showcase my experiences.
                            </Typography>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
                                <div className={classes.body}/>
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "18px", color: "#ECB22E"}} onClick={() => {
                                    window.open(personalWebsiteRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider style={{background: "#8f8f8f"}}/>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="column" alignItems="center" spacing={3}>

                                <Typography variant="h5" color="primary" align="center" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    Insight UBC
                                </Typography>
                                <Typography variant="h6" color="primary" align="center" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    September 2020 - December 2020
                                </Typography>
                                <img src={insightImage} style={{maxWidth:"150%", maxHeight:"150%"}} alt="insight"/>
                                <Container maxWidth="md" data-aos="fade-up">
                                    <Typography variant="h6" className={classes.body} color="primary" align="center">
                                        <span style={{color: "#36C5F0"}}>Skills:</span> TypeScript, JavaScript, Node.js, HTML, Mocha, Chai
                                    </Typography>
                                    <Typography variant="h6" className={classes.body} color="primary" align="center" style={{textIndent: "40px"}}>
                                        Before the start of every semester, some questions often come to the mind of many UBC students:
                                        "is the course I'm taking worth it? Is the professor teaching this course good? How have people
                                        historically performed in this course?"
                                    </Typography>
                                    <Typography variant="h6" className={classes.body} color="primary" align="center" style={{textIndent: "40px"}}>
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
                            <Divider style={{background: "#8f8f8f"}}/>
                        </Container>
                    </Grid>

                    <Grid item xs={6} data-aos="fade-up" >
                        <Stack direction="rows" spacing={0} justifyContent={"center"}>
                            <Container maxWidth="sm">
                                <img src={guava1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="guava1"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={guava2} style={{maxWidth:"101%", maxHeight:"101%"}} alt="guava2"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={guava3} style={{maxWidth:"100%", maxHeight:"100%"}} alt="guava3"/>
                            </Container>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    Guava
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    September 2020 - December 2020
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> Java, SQL, Oracle, JavaFX, FXML, CSS
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                Organizing groceries could be a headache, especially if you have many places in the house
                                to put them away, you could easily lose track of which is going to expire soon.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                To help solve this problem, I and two partners developed Guava, a grocery organizer that is built
                                on top of a relational database model. Aside from developing the database schemas, I have designed
                                and implemented the GUI that allows users to easily track what groceries they have, when they will go bad,
                                the nutritional values of each food item, as well as recipes that can be made with their current groceries.
                            </Typography>
                        </Container>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider style={{background: "#8f8f8f"}}/>
                        </Container>
                    </Grid>

                    <Grid item xs={4} data-aos="fade-up" >
                        <Stack direction="rows" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={asc1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc1"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={asc2} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc2"/>
                            </Container>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    A Simple Closet
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    May 2020 - July 2020
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> Java, JUnit, JavaFX, FXML, CSS
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
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "18px", color: "#ECB22E"}} onClick={() => {
                                    window.open(ASCRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>
                    <Grid item xs={4} data-aos="fade-up" >
                        <Stack direction="rows" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={asc3} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc3"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={asc4} style={{maxWidth:"100%", maxHeight:"100%"}} alt="asc4"/>
                            </Container>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider style={{background: "#8f8f8f"}}/>
                        </Container>
                    </Grid>

                    <Grid item xs={7} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    Tick
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    September 2019 - December 2019
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> Java, JUnit, Swing
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                Task management is the foundation of any success, whether in school or at work.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                Tick is a simple and easy to use to do list application with a reminder feature, as well as
                                a weather forecast widget with data extracted from an API that will keep users up to date with
                                the weather as they are heading in or out of work. The GUI was implemented with Java and Swing
                            </Typography>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end">
                                <div className={classes.body}/>
                                <Link component="button" variant="h6" color="primary" style={{fontSize: "18px", color: "#ECB22E"}} onClick={() => {
                                    window.open(tickRepoLink, '_blank').focus();
                                }}>
                                    Find me on GitHub
                                </Link>
                            </Stack>
                        </Container>
                    </Grid>
                    <Grid item xs={5} data-aos="fade-up" >
                        <Stack direction="column" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={tick1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="tick1"/>
                            </Container>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider style={{background: "#8f8f8f"}}/>
                        </Container>
                    </Grid>

                    <Grid item xs={5} data-aos="fade-up" >
                        <Stack direction="column" spacing={0}>
                            <Container maxWidth="sm">
                                <img src={shooter1} style={{maxWidth:"100%", maxHeight:"100%"}} alt="shooter1"/>
                            </Container>
                            <Container maxWidth="sm">
                                <img src={shooter2} style={{maxWidth:"100%", maxHeight:"100%"}} alt="shooter2"/>
                            </Container>
                        </Stack>
                    </Grid>
                    <Grid item xs={7} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "22px", fontWeight: "bold"}}>
                                    2-D Shooter
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "18px", whiteSpace:"nowrap"}}>
                                    September 2017 - January 2018
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> Python, Pygame
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                Creating my own video game has always been a goal, though simple, it was achieved with this personal
                                project.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "40px"}}>
                                I and a partner created an original horizontally-scrolling, 2-D shooter game. We designed the
                                player controlled unit as well as the different enemy classes ourselves, and we have added
                                various sound effects including shooting, being hit and more. Collision detection with
                                sprites was achieved using Pygame.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer className={classes.footer}/>
                    </Grid>
                </Grid>
        </div>
    );
}

export default ProjectsBrowser;


