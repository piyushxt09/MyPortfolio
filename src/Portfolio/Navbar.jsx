import React from 'react'
import './Navbar.css';
import { useState, useEffect } from 'react';
import Projects from '../Projects/Projects';
import Home from './Home';
import './Home.css';
import Skill from './Skill';
import Contact from './Contact';

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const HandleShowHome = (e) => {
    e.preventDefault();
    const IntroDiv = document.getElementById('Intro');
    const Projects = document.getElementById('Projects')
    Projects.style.display = 'none';
    IntroDiv.style.display = 'block';
    IntroDiv.style.transition = 'display 0.6s';
    Projects.style.transition = 'display 0.6s';
  }
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
    <>
      <div className={`Navbar ${isFixed ? 'fixed' : ''}`}>
        <span><h2>MyPortfolio</h2></span>
        <nav>
          <ul>
            <li><a href='#Home' onClick={HandleShowHome} className='nav' >Home</a></li>
            <li><a href='#About-Section' className='nav' >About</a></li>
            <li><a href='' onClick={HandleSHowProjects} className='nav' >Projects</a></li>
            <li><a href="#Skills" className='nav' >Skills</a></li>
            <li><a href="#Contact-me" className='nav' >Contact Me</a></li>
          </ul>
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Navbar;