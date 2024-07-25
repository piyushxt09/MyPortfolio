import Navbar from "./Portfolio/Navbar"
import Home from "./Portfolio/Home"
import About from "./Portfolio/About"
import { useState } from "react"
import Skill from "./Portfolio/Skill"
import Contact from "./Portfolio/Contact"
import './App.css';

function App() {

    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Contact />
      </>
    )
  
}

export default App;
