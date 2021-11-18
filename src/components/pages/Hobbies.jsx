import React, {useEffect} from "react";
import {MuiThemeProvider, Typography} from "@material-ui/core";
import * as Look from "./Look";
import GamesImageList from "../GamesImageList";
import GundamImageListTop from "../GundamImageListTop";
import GundamImageListBottom from "../GundamImageListBottom";
import AOS from 'aos';
import "aos/dist/aos.css";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {Divider} from "@mui/material";
import Footer from "../Footer";
import book1 from "./images/book1.png";
import book2 from "./images/book2.jpg";
import Grid from "@mui/material/Grid";

function Hobbies() {
    const classes = Look.styles();

    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);

    return (
        <div className="Hobbies">
            <MuiThemeProvider theme={Look.theme}>
                <div className={classes.wrapper}>
                    <Typography variant="h1" className={classes.heading} color="primary">
                        MY HOBBIES
                    </Typography>
                </div>
                <div className={classes.smallSpace} />
                <Typography variant="h6" className={classes.body} color="primary" align="center" >
                    Aside from work and personal projects, I also have a bunch of hobbies that keep me busy in my down
                    time,
                    these are only some of them!
                </Typography>
                <Container maxWidth={false} data-aos="fade-up">
                    <Divider style={{fontSize: "22px", marginTop:"50px"}} data-aos="fade-up">GAMING</Divider>
                    <div className={classes.smallSpace} />
                    <Stack direction="column" alignItems="center" justifyContent="center">
                        <GamesImageList/>
                        <Typography variant="h6" className={classes.disclaimer} color="primary" align="center">
                            IMAGES ARE ONLY FOR DEMONSTRATIVE PURPOSES, I DO NOT OWN THEM
                        </Typography>
                    </Stack>
                </Container>
                <Container maxWidth="lg" data-aos="fade-up">
                    <Stack direction="column" alignItems="center" justifyContent="center">
                        <Typography variant="h6" className={classes.body} color="primary" align="center">
                            Gaming has always been a big passion of mine. Ever since I got my very first laptop, I have
                            been into playing
                            video games. Triple-A titles, indie games, competitive games, you name it. Most notably,
                            Dota 2, a MOBA title,
                            has been a favourite that I keep going back to time after time. Through this game, not only
                            did I share moments
                            of joy and happiness with my friends, I've also learned that, for a team to work, everyone
                            has to take on different
                            roles and commit to their responsibilities in order to achieve the common goal.
                        </Typography>
                    </Stack>
                </Container>
                <Container maxWidth={false} data-aos="fade-up">
                    <Divider style={{fontSize: "22px", marginTop:"50px"}} data-aos="fade-up">GUNPLA</Divider>
                    <div className={classes.smallSpace} />
                    <Stack direction="column" alignItems="center" justifyContent="center">
                        <GundamImageListTop/>
                    </Stack>
                </Container>
                <Container maxWidth="lg" data-aos="fade-up">
                    <Stack direction="column" alignItems="center" justifyContent="center">
                        <div className={classes.smallSpace} />
                        <Typography variant="h6" className={classes.body} color="primary" align="center">
                            Gunpla, or Gundam plamo (plamo for plastic model), are plastic models of the mobile suits from the
                            popular Japanese anime franchise Gundam. This hobby of mine originated from back
                            when my father first bought me a plastic model kit during his business trip to Japan. The younger
                            me was instantly hooked by the process of building these model kits and how they look when completed.
                            I mean, come on, a few young boys can say no to a cool looking robot action figure right? As I
                            got older, I start experimenting with painting and adding custom details to these model kits,
                            not only do I feel joy and a sense of achievement when I complete one of these kits, I got to
                            practice my patience and attention to detail.
                            Evident by how many images there are here and my overflowing display cabinets at home, this hobby
                            is truly a rabbit hole, something my father would've never foresaw (or maybe he did) many many years ago.
                        </Typography>
                    </Stack>
                </Container>
                <Container maxWidth="lg" data-aos="fade-up">
                    <Stack direction="column" alignItems="center" justifyContent="center">
                        <GundamImageListBottom/>
                    </Stack>
                </Container>
                <Container maxWidth={false} data-aos="fade-up">
                    <Divider style={{fontSize: "22px", marginTop:"50px"}} data-aos="fade-up">READING</Divider>
                    <div className={classes.smallSpace} />
                    <Grid container spacing={8} style={{alignItems: "center"}}>
                        <Grid item xs={3} data-aos="fade-up" >
                            <Stack direction="column" alignItems="center" justifyContent="center">
                                <Container maxWidth="sm">
                                    <img src={book1} width="428" height="202" alt="book1"/>
                                </Container>
                                <Typography variant="h6" className={classes.disclaimer} color="primary" align="center">
                                    IMAGE IS ONLY FOR DEMONSTRATIVE PURPOSES, I DO NOT OWN IT
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} data-aos="fade-up" >
                            <Typography variant="h6" className={classes.body} color="primary" align="center">
                                As part of a New Year's resolution a few years ago, I promised myself I'd start reading more books.
                                Ever since then, I have rediscovered how much fun it is to read. Being able to absorb the
                                thoughts of great authors through words is just something like watching YouTube videos can't replace.
                                I love Sci-Fi and detective novels, as well as Chinese and Japanese literature. Some
                                of my favourites are <br></br>
                                <i> The Three-Body Problem</i> trilogy by Cixin Liu and <i>The Devotion of Suspect X </i>
                                by Keigo Higashino.
                            </Typography>
                        </Grid>
                        <Grid item xs={3} data-aos="fade-up" >
                            <Stack direction="column" alignItems="center" justifyContent="center">
                                <Container maxWidth="sm">
                                    <img src={book2} width="280" height="420" alt="book2"/>
                                </Container>

                                    <Typography variant="h6" className={classes.disclaimer} color="primary" align="center">
                                        IMAGE IS ONLY FOR DEMONSTRATIVE PURPOSES, I DO NOT OWN IT
                                    </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
                <div className={classes.bigSpace}/>
                <Footer className={classes.footer}/>
            </MuiThemeProvider>
        </div>
    );
}

export default Hobbies;