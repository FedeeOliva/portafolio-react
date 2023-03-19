import React from 'react'
import trelloclon from '../assets/trelloclon.png';
import tutubopage from '../assets/tutubopage.png';
import crowdfundpage from '../assets/crowdfundpage.png';
import CardProject from './CardProject';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section className="proyectos" id="proyectos">

			<div className="proyectos-header">
				<h2>Proyectos</h2>
			</div>
			<div className="container">
				{projects.map( (project, idx) =>
					<CardProject project={project} key={idx}/>
				)}
				
			</div>
		</section>
  )
}

export default Projects