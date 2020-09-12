import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Education from "./Education";
import About from "./About";
import Projects from "./Projects";
import Writing from "./Writing";
import Contact from "./Contact";
import "../css/App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/education" component={Education} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/writings" component={Writing} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Header} />
      </Switch>
    </div>
  );
}

export default App;
