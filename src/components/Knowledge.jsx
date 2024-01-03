import React from 'react'
import CardSkill from './CardSkill'
import { skills } from '../data/skills'

const Knowledge = () => {

  return (
    <section className="servicios" id="servicios">
			<div className="proyectos-header">
				<h2>Tecnologías</h2>
			</div>
			<div className="container fadeIn">
				<div className="servicios-section">
				{skills.map( (skill, idx) => 
					<CardSkill name={skill.name} logo={skill.logo} img={skill.img} key={idx}/>
				)}

				</div>
				
			</div>
		</section>
  )
}

export default Knowledge