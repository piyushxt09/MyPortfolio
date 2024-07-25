import React from 'react'
import './Skill.css';
import brush from './images/brush.png';
import codeSign from './images/codeSign.png';
import mobile from './images/mobile.png';

export default function Skill() {
    const ItemSkills = ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT JS', 'NODE JS', 'EXPRESS JS', 'MYSQL', 'JQUERY', 'GITHUB'];
    const ItemPercentage = ['90%', '95%', '70%', '60%', '70%', '80%', '90%', '50%', '70%'];
    const skillsItems = [
        { id: 1, title: 'Design + Devlopement', description: 'clean, modern designs - optimized for performance, search engines, and converting users to customers.', img: brush },
        { id: 2, title: 'Technology', description: 'combined all the latest technologiesto a progressive website.', img: codeSign },
        { id: 3, title: 'Always Responsive', description: 'A responsive design makes your website accessible to all users, regardless of their device.', img: mobile },

    ];
    return (
        <>
            <section className="Skills" id="Skills">
                <h1>My Skills</h1>
                <p className='HeadingTitle'>I like to Craft Beautiful And Scalable Web Products</p>
                <div className="skillItems">
                    <div className='skill'>
                    {skillsItems.map(item =><div className='Mapskill' key={item.id}>
                        <img src={item.img} alt="" className='skillImg' />
                        <div><h2>{item.title}</h2> <p>{item.description}</p></div>
                    </div>)}
                    </div>
                    <div className="skills-About">
                      {ItemSkills.map(item =><div className='skillabout'>
                        <div className='HeadindSkill'>
                            <h4>{item}</h4>
                            </div>
                      </div>)}
                    </div>
                </div>
            </section>
        </>
    )
}
