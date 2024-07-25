import './Home.css';
import gmail from './images/gmail.png';
import instagram from './images/instagram.png';
import github from './images/github-sign.png';
import linkedin from './images/linkedin.png';
import Projects from '../Projects/Projects';
import App from '../App';
import { useState } from 'react';

const Home = () => {
    const HandleSHowProjects = (e) => {
        e.preventDefault();
        const Projects = document.getElementById('Projects')
        const IntroDiv = document.getElementById('Intro');
        IntroDiv.style.display = 'none'
        Projects.style.display = 'block'
        IntroDiv.style.transition = 'display 0.6s';
        Projects.style.transition = 'display 0.6s';
    }
    return (
        <section className='HomeSection' id='Home'>
            <div className="Intro" id='Intro' >
                <h2>Hi There,<br />I'm <span>Priyanshu Chauhan </span></h2>
                <h4>I Am into  Web Developer</h4>
                <span className='Buttons'>
                    <button className="About-me" >About Me</button>
                    <button className='Hire-me'>Hire Me</button>
                    <button className='Project-btn' onClick={HandleSHowProjects}>Projects</button>
                </span>
                <div className='Social-Links'>
                    <span>
                        <img src={gmail} alt="" />
                        <img src={instagram} alt="" />
                        <img src={github} alt="" />
                        <img src={linkedin} alt="" />
                    </span>
                </div>
            </div>
            <Projects />
        </section>
    )
}

export default Home;