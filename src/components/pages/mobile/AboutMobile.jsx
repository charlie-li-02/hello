import React, {useEffect} from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import Container from '@material-ui/core/Container'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Footer from "../../Footer";
import * as Look from "../LookMobile";
import {Divider} from "@mui/material";
import AOS from 'aos';
import "aos/dist/aos.css";
import {TypeAnimation} from "react-type-animation";


function About() {
    const classes = Look.styles();

    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);

    return (
        <div className="About">
                <div className={classes.wrapper}>
                    <TypeAnimation
                        style={{
                            fontSize: '25px',
                            textAlign: 'left',
                            marginTop: "4em",
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "#ffffff"
                        }}
                        sequence={"ABOUT ME"}
                        repeat={0}
                        className={classes.heading}/>
                </div>
                <div className={classes.subHeading}/>
                <Grid container spacing={2} style={{alignItems: "center"}}>
                    <Grid item xs={12} data-aos="fade-up" >
                        <Container maxWidth="sm">
                            <img src={require("../images/head.jpg").default} style={{maxWidth:"100%", maxHeight:"100%"}} alt="Me"/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Typography variant="h6" color="primary" align="left"
                                        style={{fontSize: "13px"}}>
                                Hey! I'm Charlie, a student at the University of British Columbia, majoring in Computer
                                Science.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left"
                                        style={{textIndent: "20px"}}>
                                Back from a very young age, like most kids, I was hooked on video games ever since the
                                first
                                time I had a chance to play one. Shortly after that, my interest in video games and
                                computers
                                had me thinking: "how amazing would it be if I can make my own video game one day?"
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left"
                                        style={{textIndent: "20px"}}>
                                Naturally, when I had the chance, I took my very first programming class in high school
                                and eventually chose to major in Computer Science when it was the time to choose a
                                specialization.
                                The spark of interest in programming set off by video games had turned into my goal of
                                pursuing a career in software development. Through the courses and co-op experiences
                                I've had during my time at UBC, I realized how much I loved working with web
                                technologies
                                and being a full stack developer.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left"
                                        style={{textIndent: "20px"}}>
                                I consider myself as a detail-oriented, patient, positive, and flexible person. Quick
                                adaptability,
                                team-working skills, and a hardworking mindset are what I consider my strongest assets.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider sx={{
                                "&::before, &::after": {
                                    borderColor: "#8f8f8f",
                                },
                            }} style={{fontSize: "18px", marginTop:"15px", color: "#ffffff"}}>MY JOURNEY</Divider>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up" >
                        <Container maxWidth="sm">
                            <img src={require("../images/bgc.jpg").default} style={{maxWidth:"85%", maxHeight:"85%"}} alt="BGC Engineering"/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "15px", fontWeight: "bold"}}>
                                    BGC Engineering Inc.
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "13px", whiteSpace:"nowrap"}}>
                                    September 2021 - April 2022
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                Web Development Co-op
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> Python, TypeScript, JavaScript, React.js, C#, .NET, Microsoft Azure, PostgreSQL
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                BGC Engineering Inc. is an international consulting firm that provides professional services in
                                applied earth sciences. BGC's software, Cambio, is a web-based geohazard management system that
                                is designed to empower better, proactive, and risk-informed decision for large-scaled engineering projects
                                such as pipelines, mining and transportation.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                I took on tasks such as developing, refactoring, and maintaining RESTful API endpoints that
                                import and analyze data about the Earth such as precipitation and seismic activities; as well as implementing
                                new frontend and backend features. While on my co-op term at BGC, I've gained skills as a full stack developer as well the necessary
                                skills such as story point estimation and ticket management to work in an agile software development environment.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="sm">
                            <img src={require("../images/jostle.jpg").default} style={{maxWidth:"85%", maxHeight:"85%"}} alt="Jostle"/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "15px", fontWeight: "bold"}}>
                                    Jostle
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "13px", whiteSpace:"nowrap"}}>
                                    January 2021 - September 2021
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                QA Analyst Co-op
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left">
                                <span style={{color: "#36C5F0"}}>Skills:</span> Java, Selenium, JUnit, Jenkins, GitLab, Ansible Tower, Sumo Logic, AWS
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Jostle strives to make an intranet that would bring employees together and help leaders align their
                                team more intuitively. My co-op term at Jostle was an unforgettable experience, from the people I've met
                                and the skills they've taught me. Not only did I gain exposure to the standard QA methodologies,
                                but through interacting with the QA team members and developers on a daily basis, I've gained a lot of soft
                                skills such as how to communicate effectively and how to work as a team in a Kanban software development cycle.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                As a QA Analyst Co-op, I developed an automated testing framework with Java and Selenium
                                for Jostle's upcoming feature that will allow automated integration tests to run daily and
                                ensure the system is performing as expected. In addition, my tasks also included creating and
                                maintaining existing automated test suites, manual testing, analysing the test results,
                                and code reviews.
                            </Typography>

                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="sm">
                            <img src={require("../images/ubc.jpg").default} style={{maxWidth:"85%", maxHeight:"85%"}} alt="UBC"/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "15px", fontWeight: "bold"}}>
                                    University of British Columbia
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "13px", whiteSpace:"nowrap"}}>
                                    September 2019 - Now
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                Teaching Assistant
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                During my time at UBC, I worked as a teaching assistant for the course CPSC 121 - Models of Computation.
                                The content of the course includes discrete mathematics, boolean algebra, proof techniques,
                                combinations logic circuits, sequential circuits, sets and relations, finite state machines and instruction execution.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Being a teaching assistant was an extremely rewarding experience, not only did I get to deepen my understanding
                                of the course content, I was given a chance to connect with students and improve my interpersonal skills such as
                                communication and leadership skills.
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Over the many semesters of being a teaching assistant for CPSC 121, I conducted laboratory sessions to
                                roughly 30 students per section, graded assignments and examinations, provided assistant to students
                                through hosting office hours and online question and answer forum.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth={false}>
                            <Divider sx={{
                                "&::before, &::after": {
                                    borderColor: "#8f8f8f",
                                },
                            }} style={{fontSize: "18px", marginTop:"15px", color: "#ffffff"}}>EDUCATION</Divider>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="sm">
                            <img src={require('../images/ubc.jpg').default} style={{maxWidth:"85%", maxHeight:"85%"}} alt="UBC"/>
                        </Container>
                    </Grid>
                    <Grid item xs={12} data-aos="fade-up">
                        <Container maxWidth="md">
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" color="primary" align="left" style={{fontSize: "18px", fontWeight: "bold"}}>
                                    University of British Columbia
                                </Typography>
                                <Typography variant="h6" color="primary" align="right" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                    September 2018 - Now
                                </Typography>
                            </Stack>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{fontSize: "15px", whiteSpace:"nowrap"}}>
                                Bachelor of Science, Major in Computer Science
                            </Typography>
                            <Typography variant="h6" className={classes.body} color="primary" align="left" style={{textIndent: "20px"}}>
                                Over the years of studying at UBC, I have maintained an overall average of 90%, which has
                                put me on the Dean's Honour List and received a standing of Science Scholar. In addition,
                                I have received the Trek Excellence Scholarship which is offered to the top 5% of domestic
                                students at UBC Vancouver and the Charles and Jane Banks Scholarship.
                            </Typography>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.smallSpace}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer className={classes.footer}/>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.bigSpace}/>
                    </Grid>
                </Grid>
        </div>
    );
}

export default About;