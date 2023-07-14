import React, { useCallback } from "react";
import './App.css';
import {BrowserView, MobileView} from "react-device-detect";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact, Hobbies, Projects, Skills } from "./components/pages";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";
import * as Look from "./components/pages/Look";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

function App() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const options = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1
            },
            size: {
                value: { min: 1, max: 8 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            },
            background: {
                color: {
                    value: "#121",
                }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                }
            }
        },
        fullScreen: {
            enable: true,
            zIndex: -1
        }
    };
    return (
        <div className="App" id="App">
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options}/>
            <div id="backdrop">
            <MuiThemeProvider theme={Look.themeDark}>
                <CssBaseline/>
                <BrowserView>
                    <Router>
                        <NavBar/>
                        <Switch>
                            <Route path="/hello" exact component={() => <Home/>}/>
                            <Route path="/about" exact component={() => <About/>}/>
                            <Route path="/contact" exact component={() => <Contact/>}/>
                            <Route path="/hobbies" exact component={() => <Hobbies/>}/>
                            <Route path="/projects" exact component={() => <Projects/>}/>
                            <Route path="/skills" exact component={() => <Skills/>}/>
                        </Switch>
                    </Router>
                </BrowserView>
                <MobileView>
                    <Router>
                        <NavBarMobile/>
                        <Switch>
                            <Route path="/hello" exact component={() => <Home/>}/>
                            <Route path="/about" exact component={() => <About/>}/>
                            <Route path="/contact" exact component={() => <Contact/>}/>
                            <Route path="/hobbies" exact component={() => <Hobbies/>}/>
                            <Route path="/projects" exact component={() => <Projects/>}/>
                            <Route path="/skills" exact component={() => <Skills/>}/>
                        </Switch>
                    </Router>
                </MobileView>
            </MuiThemeProvider>
            </div>
        </div>
    )
}

window.onload = () => {
    if (document.getElementById('homeview') === null) {
        blurBackdrop();
    } else {
        unblurBackdrop();
    }
};

export function blurBackdrop() {
    let backdrop = document.getElementById('backdrop');
    if (backdrop !== null) {
        backdrop.style.backdropFilter = "blur(15px)";
    }
}

export function unblurBackdrop() {
    let backdrop = document.getElementById('backdrop');
    if (backdrop !== null) {
        backdrop.style.backdropFilter = "none";
    }
}

export default App;
