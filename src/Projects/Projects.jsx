import React from 'react'
import './Projects.css';
import Navbar from '../Portfolio/Navbar';
import './../Portfolio/Home.css';

export default function Projects() {
  const ProjectsList = [
    { id: 1, Title: 'PortfolioBuilding Website', Link: '' },
    { id: 2, Title: 'Netflix Clone', Link: '' },
    { id: 3, Title: 'Google Play Store', Link: '' },
    { id: 4, Title: 'To-do List', Link: '' },
    { id: 5, Title: 'E-commerce Website', Link: '' },
    { id: 6, Title: 'Event Planner Website', Link: '' },
  ];
  const EventHandle = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <section className="Projects" id='Projects'>
        <h1><u>Projects</u></h1>
        <div className="Project-Items">
          {ProjectsList.map((item) => <div key={item.id} className='Pitem'><a onClick={EventHandle} href={item.Link}>{item.Title}</a></div>)}
        </div>
      </section>
    </>
  )
}
