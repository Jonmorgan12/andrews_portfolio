// import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/experience">
              <Experience />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
