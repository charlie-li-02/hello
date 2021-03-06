import React from "react";
import './App.css';
import {BrowserView, MobileView} from "react-device-detect";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact, Hobbies, Projects, Skills } from "./components/pages";
import NavBar from "./components/NavBar";
import NavBarMobile from "./components/NavBarMobile";


function App() {
    return (
        <div className="App">
            <BrowserView>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/hello" exact component={() => <Home />} />
                        <Route path="/about" exact component={() => <About />} />
                        <Route path="/contact" exact component={() => <Contact />} />
                        <Route path="/hobbies" exact component={() => <Hobbies />} />
                        <Route path="/projects" exact component={() => <Projects />} />
                        <Route path="/skills" exact component={() => <Skills />} />
                    </Switch>
                </Router>
            </BrowserView>
            <MobileView>
                <Router>
                    <NavBarMobile />
                    <Switch>
                        <Route path="/hello" exact component={() => <Home />} />
                        <Route path="/about" exact component={() => <About />} />
                        <Route path="/contact" exact component={() => <Contact />} />
                        <Route path="/hobbies" exact component={() => <Hobbies />} />
                        <Route path="/projects" exact component={() => <Projects />} />
                        <Route path="/skills" exact component={() => <Skills />} />
                    </Switch>
                </Router>
            </MobileView>
        </div>
    )
}

export default App;
