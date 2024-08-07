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
    const SocialLinks = ['mailto:chauhanluckey4@gmail.com', 'https://www.instagram.com/direct/t/piyush_xt09__', 'https://github.com/piyushxt09', 'https://www.linkedin.com/in/priyanshu-chauhan-696a18262/'];

    const HandleLinks = (name) => {
        if (name === 'gmail') {
            window.location.href = SocialLinks[0];
        }
        if (name === 'instagram') {
            window.location.href = SocialLinks[1];
        }
        if (name === 'github') {
            window.location.href = SocialLinks[2];
        }
        if (name === 'linkedin') {
            window.location.href = SocialLinks[3];
        }
    }

    return (
        <section className='HomeSection' id='Home'>
            <div className="Intro" id='Intro' >
                <h2>Hi There,<br />I'm <span>Priyanshu Chauhan </span></h2>
                <h4>I Am into  Web Developer</h4>
                <span className='Buttons'>
                    <button className="About-me" onClick={() => window.location.href = '#About-Section'}>About Me</button>
                    <button className='Hire-me' onClick={() => window.location.href = '#Contact-me'}>Hire Me</button>
                    <button className='Project-btn' onClick={HandleSHowProjects}>Projects</button>
                </span>
                <div className='Social-Links'>
                    <span>
                        <img src={gmail} alt="" onClick={() => HandleLinks('gmail')} />
                        <img src={instagram} alt="" onClick={() => HandleLinks('instagram')} />
                        <img src={github} alt="" onClick={() => HandleLinks('github')} />
                        <img src={linkedin} alt="" onClick={() => HandleLinks('linkedin')} />
                    </span>
                </div>
            </div>
            <Projects />
        </section>
    )
}

export default Home;
