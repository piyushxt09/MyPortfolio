import React from 'react'
import './Projects.css';
import Navbar from '../Portfolio/Navbar';
import './../Portfolio/Home.css';

export default function Projects() {
  const ProjectsList = [
    { id: 1, Title: 'PortfolioBuilding Website', Link: '' },
    { id: 2, Title: 'Latest Movies', Link: 'https://latest-moviext09.netlify.app/' },
    { id: 3, Title: 'Google Play Store', Link: '' },
    { id: 4, Title: 'To-do List', Link: 'https://todolistxt09.netlify.app/' },
    { id: 5, Title: 'E-commerce Website', Link: 'https://infiniteproducts.netlify.app/' },
    { id: 6, Title: 'Conference Expense Planner', Link: 'https://conference-expense-plannerxt09.netlify.app/' },
  ];

  return (
    <>
      <section className="Projects" id='Projects'>
        <h1><u>Projects</u></h1>
        <div className="Project-Items">
          {ProjectsList.map((item) => 
          <div key={item.id} className='Pitem'>
            <a href={item.Link}>{item.Title}</a>
            </div>)}
        </div>
      </section>
    </>
  )
}
